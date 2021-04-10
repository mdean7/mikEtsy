export const fetchProducts = () =>(
  $.ajax({
    url: "/api/products"
  })
)

export const fetchProduct = (productId) =>(
  $.ajax({
    url: `/api/products/${productId}`
  })
)

export const createProduct = (product) =>(
  $.ajax({
    url: "/api/products",
    method: "POST",
    data: {product}
  })
)

export const updateProduct = (product, id) =>(
  $.ajax({
    url: `/api/products/${id}`,
    method: "PATCH",
    data: {product}
  })
)

export const deleteProduct = (productId) =>(
  $.ajax({
    url: `/api/products/${productId}`,
    method: "DELETE"
  })
)