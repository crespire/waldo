class AddPicRefToSecret < ActiveRecord::Migration[7.0]
  def change
    add_reference :secrets, :picture, foreign_key: true
  end
end
