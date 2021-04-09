class RemoveNullConstraintFromOrderId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :products, :order_id, true
  end
end
