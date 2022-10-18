class AddScoreReferenceToLeaderboard < ActiveRecord::Migration[7.0]
  def change
    add_reference :scores, :leaderboard, index: true
  end
end
