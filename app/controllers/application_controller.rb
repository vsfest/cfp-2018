class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    unless authenticate_or_request_with_http_basic('fuk') { |u,p| u=="team" && p=="they do move in herds"}
      render status: :forbidden
    end
  end
end
