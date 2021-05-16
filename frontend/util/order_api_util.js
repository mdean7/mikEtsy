export const fetchOrders = () =>(
  $.ajax({
    url: "/api/orders"
  })
)

export const fetchOrder = (orderId) =>(
  $.ajax({
    url: `/api/orders/${orderId}`
  })
)

export const createOrder = (order) =>(
  $.ajax({
    url: "/api/orders",
    method: "POST",
    data: {order},
   
  })
)

export const updateOrder = (order, id) =>(
  $.ajax({
    url: `/api/orders/${id}`,
    method: "PATCH",
    data: {order},
   
  })
)

export const deleteOrder = (orderId) =>(
  $.ajax({
    url: `/api/orders/${orderId}`,
    method: "DELETE"
  })
)