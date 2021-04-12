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

export const createProduct = (formData) =>(
  $.ajax({
    url: "/api/products",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  })
)

export const updateProduct = (formData, id) =>(
  $.ajax({
    url: `/api/products/${id}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  })
)

export const deleteProduct = (productId) =>(
  $.ajax({
    url: `/api/products/${productId}`,
    method: "DELETE"
  })
)