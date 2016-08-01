class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    id = Rails.application.message_verifier(:session).verify(bearer_token)
    unless (@user = User.find(id))
      render status: :forbidden
    end
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    render status: :forbidden
  end

  def bearer_token
    pattern = /^Bearer /
    header  = request.env["HTTP_AUTHORIZATION"] # <= env
    header.gsub(pattern, '') if header && header.match(pattern)
  end
end
