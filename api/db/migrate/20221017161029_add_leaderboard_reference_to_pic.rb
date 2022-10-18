class AddLeaderboardReferenceToPic < ActiveRecord::Migration[7.0]
  def change
    add_reference :leaderboards, :picture, index: true
  end
end
