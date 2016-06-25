class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :twitter
      t.string :gender
      t.string :location
      t.string :industry_experience
      t.string :speaking_experience

      t.timestamps
    end
  end
end
