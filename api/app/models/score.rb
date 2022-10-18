class Score < ApplicationRecord
  belongs_to :leaderboard

  validates :name, presence: true, length: { in: 2..3 }
end
