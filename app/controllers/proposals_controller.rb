class ProposalsController < ApplicationController
  before_action :set_proposal, only: [:show]
  before_action :check_authentication, except: [:show]

  # GET /proposals
  def index
    @proposals = Proposal.all
      .map { |p| p.redacted(request.original_url) }
      .index_by { |p| p['sekret'] }.values

    render json: @proposals
  end

  # GET /proposals/magic-hash
  def show
    if params[:unredacted] == 'true'
      render json: @proposal
    else
      render json: @proposal.redacted(request.original_url)
    end
  end

  # POST /proposals
  # def create
  #   @proposal = Proposal.new(proposal_params)
  #
  #   if @proposal.save
  #     render json: @proposal, status: :created, location: @proposal
  #   else
  #     render json: @proposal.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # PATCH/PUT /proposals/1
  # def update
  #   if @proposal.update(proposal_params)
  #     render json: @proposal
  #   else
  #     render json: @proposal.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # DELETE /proposals/1
  # def destroy
  #   @proposal.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_proposal
      @proposal = Proposal.where(sekret: params[:id]).order("created_at desc").first
    end

    # Only allow a trusted parameter "white list" through.
    def proposal_params
      params.require(:proposal).permit!
    end
end
