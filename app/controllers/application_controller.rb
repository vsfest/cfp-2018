class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    if request.referrer.nil?
       @user = authenticate_or_request_with_http_basic('users') { |u,p|
         User.authenticate(u,p)
       }
    else
      id = Rails.application.message_verifier(:session).verify(bearer_token)
      @user = User.find(id)
    end
    render status: :forbidden unless @user
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    render status: :forbidden
  end

  def bearer_token
    pattern = /^Bearer /
    header  = request.env["HTTP_AUTHORIZATION"] # <= env
    header.gsub(pattern, '') if header && header.match(pattern)
  end
end
