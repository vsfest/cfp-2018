require 'csv'

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
          total_score: proposal.round1_stats["normalisedMean"],
          votes: proposal.vote_summary,
          full_submission: request.original_url.sub(/[^\/]+$/,"proposals/#{proposal.sekret}?unredacted=true")
        }
      }.sort_by { |proposal| proposal[:ranking] }
    }
    css = do_stuff[Proposal.includes(:votes).where(conference: 'css'), 60]
    js = do_stuff[Proposal.includes(:votes).where(conference: 'js'), 100]

    render json: {
      css_rejections: css,
      js_rejections: js
    }
  end

  def round2_candidates
    do_stuff = -> records, num {
      CSV.generate { |csv|
        csv << %w(title description)

        records.to_a.select { |proposal|
          proposal.round1_stats && proposal.round1_stats["ranking"] < num
        }.sort_by { |proposal| proposal.round1_stats["ranking"]
        }.each { |proposal|
          csv << [
            proposal.title,
            "\n\n" + proposal.submission["description"]["text"]
          ]
        }
      }
    }

    if params[:conf] == 'css'
      render text: do_stuff[Proposal.includes(:votes).where(conference: 'css'), 60]
    elsif params[:conf] == 'js'
      render text: do_stuff[Proposal.includes(:votes).where(conference: 'js'), 100]
    end
  end

  def final_rejections
    acceptances = %w(
      ally@allyelle.com
      ampalanzi@gmail.com
      michael@michaelrog.com
      josh@x-team.com
      nadiehbremer@gmail.com
      barak.chamo@gmail.com
      jmperez1985@gmail.com
      serenadantingchen@gmail.com
      petra@ustwo.com
      stanulam59@gmail.com
      hi+jsconfau@jes.st
      emil@bayes.dk
      me@bassjacob.com
      jess.lord@gmail.com
      sole@mozilla.com
      michaela.lehr@geildanke.com
      rumyra@gmail.com
      post@schoenaberselten.com
      me@zachstronaut.com
      no@no.com
      me@karolinaszczur.com
      glenmaddern@gmail.com
    ) + [nil,''] # some invalid names
    by_emails = Proposal.where(conference: params[:conference]).index_by { |p| p.submission['email'] }
    rejection_emails = (by_emails.keys - acceptances)
    render text: CSV.generate { |csv|
       csv << %w(email name)
       rejection_emails.each { |email|
         csv << [
           email,
           by_emails[email].submission['name']
         ]
       }
     }
  end

  private
end
