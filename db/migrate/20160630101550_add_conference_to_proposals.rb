class AddConferenceToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :conference, :string, null: false
  end
end
