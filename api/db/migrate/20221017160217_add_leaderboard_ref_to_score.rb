class AddLeaderboardRefToScore < ActiveRecord::Migration[7.0]
  def change
    add_reference :leaderboards, :score, index: true
  end
end
