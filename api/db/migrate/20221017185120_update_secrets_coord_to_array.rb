class UpdateSecretsCoordToArray < ActiveRecord::Migration[7.0]
  def change
    change_column :secrets, :coords, :integer, array: true, default: [], using: 'ARRAY[coords]::INTEGER[]'
  end
end
