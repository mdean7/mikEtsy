export const fetchReviews = () =>(
  $.ajax({
    url: "/api/reviews"
  })
)

export const fetchReview = (reviewId) =>(
  $.ajax({
    url: `/api/reviews/${reviewId}`
  })
)

export const createReview = (review) =>(
  $.ajax({
    url: "/api/reviews",
    method: "POST",
    data: {review},
   
  })
)

export const updateReview = (review, id) =>(
  $.ajax({
    url: `/api/reviews/${id}`,
    method: "PATCH",
    data: {review},
   
  })
)

export const deleteReview = (reviewId) =>(
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
)