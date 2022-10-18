class AddNameToScores < ActiveRecord::Migration[7.0]
  def change
    add_column :scores, :name, :string, null: false
  end
end
