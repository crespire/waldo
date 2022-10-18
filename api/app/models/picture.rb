class Picture < ApplicationRecord
  has_many :secrets, dependent: :destroy
  has_one :leaderboard, dependent: :destroy
  has_many :scores, through: :leaderboard

  after_create do
    @leaderboard = build_leaderboard
    @leaderboard.save!
    update(leaderboard_id: @leaderboard.id)
  end
end
