# == Schema Information
#
# Table name: orders
#
#  id         :bigint           not null, primary key
#  total      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_orders_on_product_id  (product_id)
#  index_orders_on_user_id     (user_id)
#
require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
