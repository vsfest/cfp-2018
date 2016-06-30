class Proposal < ApplicationRecord
  serialize :submission

  before_create def set_sekret
    self.sekret = SecureRandom.hex(12)
  end
end
