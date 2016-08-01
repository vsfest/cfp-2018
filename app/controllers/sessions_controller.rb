class SessionsController < ApplicationController
  def create
    if user = User.authenticate(params[:username], params[:password])
      session[:user_id] = user.id
    end
  end

  def destroy
    session[:user_id] = null
  end
end
