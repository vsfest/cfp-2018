class Proposal < ApplicationRecord
  serialize :submission # accidentally did this as YAML lol
  serialize :round1_stats, JSON
  has_many :votes

  before_create def set_sekret
    self.sekret = (self.sekret || SecureRandom.hex(12))
  end

  def redacted(original_url)
    safe = self.attributes.except('user_id')
    safe['submission'] = safe['submission'].except 'flights','twitter','photo','email','name'
    safe['submission']['description'].delete 'redactions'
    safe['FULL_SUBMISSION_UNREDACTED'] = if original_url =~ /#{sekret}$/
      original_url + '?unredacted=true'
      else original_url + '/' + self.sekret + '?unredacted=true'
    end
    safe
  end

  def vote_summary
    Hash[*self.votes.map { |v| [
      User.find(v.user_id).name,
      if v.comments.length > 0 then "#{v.vote} — #{v.comments}" else v.vote end
    ] }.flatten]
  end
end
