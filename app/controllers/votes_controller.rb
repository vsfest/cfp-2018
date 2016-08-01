class VotesController < ApplicationController
  before_action :check_authentication

  # GET /votes
  def index
    @votes = Vote.where(user_id: @user.id)

    render json: @votes
  end

  # POST /votes
  def create
    @vote = Vote.new(vote_params)

    if @vote.save
      render json: @vote, status: :created, location: @vote
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def vote_params
      params.require(:vote).permit(:user_id, :proposal_id, :round, :vote, :comments)
    end
end
