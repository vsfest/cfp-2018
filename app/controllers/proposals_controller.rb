class ProposalsController < ApplicationController
  before_action :set_proposal, only: [:show, :update]
  before_action :check_authentication, except: [:show, :create, :update]

  # GET /proposals
  def index
    @proposals = Proposal.all.map { |p|
      safe = p.attributes.except('sekret', 'user_id')
      safe['submission'] = safe['submission'].except 'flights','twitter','photo','email','name'
      safe['submission']['description'].delete 'redactions'
      safe['FULL_SUBMISSION_UNREDACTED'] = request.original_url + '/' + p.sekret
      safe
    }

    render json: @proposals
  end

  # GET /proposals/magic-hash
  def show
    render json: @proposal
  end

  # POST /proposals
  def create
    @proposal = Proposal.new(proposal_params)

    if @proposal.save
      render json: @proposal, status: :created, location: @proposal
    else
      render json: @proposal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /proposals/1
  def update
    if @proposal.update(proposal_params)
      render json: @proposal
    else
      render json: @proposal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /proposals/1
  def destroy
    @proposal.destroy
  end

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
