class SessionsController < ApplicationController
  def create
    if (user = User.authenticate(params[:username], params[:password]))
      render json: {
        sekret: Rails.application.message_verifier(:session).generate(user.id)
      }
    else
      head :forbidden
    end
  end
end
