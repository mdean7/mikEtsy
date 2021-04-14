import * as ReviewAPIUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const requestReviews = () => (dispatch)=> (
  ReviewAPIUtil.fetchReviews()
  .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const requestReview = (reviewId) => (dispatch) =>(
  ReviewAPIUtil.fetchReview(reviewId)
  .then((review) =>dispatch(receiveReview(review)))
);

export const createReview = (review) => (dispatch)=> (
  ReviewAPIUtil.createReview(review)
  .then((review) => dispatch(receiveReview(review)))
);


export const updateReview = (review, id) => (dispatch)=> (
  ReviewAPIUtil.updateReview(review, id)
  .then((review) => dispatch(receiveReview(review)))
);

export const deleteReview = (reviewId) => (dispatch) =>(
  ReviewAPIUtil.deleteReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)))
);
