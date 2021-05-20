# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  photoUrl    :string
#  price       :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  order_id    :integer
#  user_id     :integer          not null
#
# Indexes
#
#  index_products_on_order_id  (order_id)
#  index_products_on_user_id   (user_id)
#
class Product < ApplicationRecord
  
  validates :description, :price, :title, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :photo
    
  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

  belongs_to :order,
    foreign_key: :order_id,
    class_name: :Order
end
