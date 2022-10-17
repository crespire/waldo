class Leaderboard < ApplicationRecord
  belongs_to :picture
  has_many :scores, -> { order(seconds: :asc) }, dependent: :destroy
end
