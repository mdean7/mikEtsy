class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null:false
      t.text :description, null:false
      t.integer :price, null:false
      t.integer :user_id, null:false
      t.integer :order_id, null:false
      
      t.timestamps
    end
    add_index :products, :user_id
    add_index :products, :order_id
  end
end
