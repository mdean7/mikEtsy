json.partial! 'product', product: @product
if @product.photo.attached?
  json.photoUrl url_for(product.photo)
end
