class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  def check_authentication
    unless authenticate_or_request_with_http_basic('fuk') { |u,p| u=="staff" && p=="sofknsekreteh"}
      render status: :forbidden
    end
  end
end
