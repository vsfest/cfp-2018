class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    unless (@user = User.find(session[:id])) || authenticate_or_request_with_http_basic('users') { |u,p| User.authenticate(u,p) }
      render status: :forbidden
    end
  end
end
