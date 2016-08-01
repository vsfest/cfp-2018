class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    unless (@user = User.find(session[:id]))
      render status: :forbidden
    end
  end
end
