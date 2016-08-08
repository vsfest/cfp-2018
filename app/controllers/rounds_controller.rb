class RoundsController < ApplicationController
  before_action :check_authentication

  # GET /rounds/:id
  def show
    @votes = Vote.where(round: params[:id])
      .index_by { |p| [p[:user_id], p[:proposal_id]] }.values
    @proposals = Proposal.select(:id, :title, :conference, :sekret)
      .where(id: @votes.map(&:id))

    render json: {votes: @votes, proposals: @proposals}
  end
end
