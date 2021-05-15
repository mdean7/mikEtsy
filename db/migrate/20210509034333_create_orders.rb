class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :total, null:false
      t.integer :user_id, null:false
      t.integer :product_id, null:false

      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :product_id
  end
end
