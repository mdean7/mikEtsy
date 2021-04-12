json.extract! product, :id, :description, :title, :price, :user_id, :order_id
if product.photo.attached?
  json.photoUrl url_for(product.photo)
end