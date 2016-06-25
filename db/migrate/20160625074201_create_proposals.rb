class CreateProposals < ActiveRecord::Migration[5.0]
  def change
    create_table :proposals do |t|
      t.int :user_id
      t.string :title
      t.json :submission

      t.timestamps
    end
  end
end
