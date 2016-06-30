class AddSekretToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :sekret, :string, null: false
  end
end
