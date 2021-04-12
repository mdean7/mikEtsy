@products.each do |product|
  json.set! product.id do
    json.partial! 'product', product: product
    
    if product.photo.attached?
      json.photoUrl url_for(product.photo)
    end
  end
end
