class RoundsController < ApplicationController
  before_action :check_authentication

  # GET /rounds/:id
  def show
    @votes = Vote.where(round: params[:id])
      .index_by { |p| [p[:user_id], p[:proposal_id]] }.values

    render json: @votes
  end
end
