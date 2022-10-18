class UpdatePicColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :pictures, :diffiuculty, :difficulty
  end
end
