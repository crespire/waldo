class AddNameToSecret < ActiveRecord::Migration[7.0]
  def change
    add_column :secrets, :name, :string
  end
end
