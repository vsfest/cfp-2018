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

  def round1_rejects
    do_stuff = -> records, num {
      records.to_a.select { |proposal|
        proposal.round1_stats && proposal.round1_stats["ranking"] >= num
      }.map { |proposal|
        {
          id: proposal.id,
          title: proposal.title,
          name: proposal.submission["name"],
          email: proposal.submission["email"],
          ranking: proposal.round1_stats["ranking"],
          total_score: proposal.round1_stats["normalisedMean"]
        }
      }.sort_by { |proposal| proposal[:ranking] }
    }
    css = do_stuff[Proposal.where(conference: 'css'), 50]
    js = do_stuff[Proposal.where(conference: 'js'), 75]

    render json: {
      css_rejections: css,
      js_rejections: js
    }
  end

  private
end
