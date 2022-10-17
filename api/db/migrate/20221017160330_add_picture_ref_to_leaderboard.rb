class AddPictureRefToLeaderboard < ActiveRecord::Migration[7.0]
  def change
    add_reference :pictures, :leaderboard, index: true
  end
end
