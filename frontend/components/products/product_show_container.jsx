import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import {requestReviews, deleteReview} from "../../actions/review_actions"
import ProductShow from "./product_show";


const mstp = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
  reviews: Object.values(state.reviews),
  currentUserId: state.session.id,
});

const mdtp = (dispatch) => ({
  requestProduct: (productId) => dispatch(requestProduct(productId)),
  requestReviews: () => dispatch(requestReviews()),
  deleteReview:  (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mstp, mdtp)(ProductShow);
