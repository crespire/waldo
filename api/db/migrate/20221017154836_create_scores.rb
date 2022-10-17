class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.datetime "start_time"
      t.datetime "end_time"
      t.numeric "seconds"

      t.timestamps
    end
  end
end
