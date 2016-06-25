require 'test_helper'

class ProposalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @proposal = proposals(:one)
  end

  test "should get index" do
    get proposals_url, as: :json
    assert_response :success
  end

  test "should create proposal" do
    assert_difference('Proposal.count') do
      post proposals_url, params: { proposal: { submission: @proposal.submission, title: @proposal.title, user_id: @proposal.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show proposal" do
    get proposal_url(@proposal), as: :json
    assert_response :success
  end

  test "should update proposal" do
    patch proposal_url(@proposal), params: { proposal: { submission: @proposal.submission, title: @proposal.title, user_id: @proposal.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy proposal" do
    assert_difference('Proposal.count', -1) do
      delete proposal_url(@proposal), as: :json
    end

    assert_response 204
  end
end
