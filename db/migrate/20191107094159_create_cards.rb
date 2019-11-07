class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.belongs_to :list, null: false, foreign_key: true
      t.string :title, null: false

      t.timestamps
    end
  end
end
