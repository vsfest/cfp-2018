class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :proposal_id
      t.integer :round
      t.string :vote
      t.text :comments

      t.timestamps
    end
  end
end
