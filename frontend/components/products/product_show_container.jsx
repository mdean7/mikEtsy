import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import {requestReviews, deleteReview} from "../../actions/review_actions"
import ProductShow from "./product_show";
import {requestUsers} from "../../actions/user_actions"
import {createOrder, updateOrder} from "../../actions/order_actions"

const mstp = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
  reviews: Object.values(state.reviews),
  users: Object.values(state.entities.users),
  currentUserId: state.session.id,
  orders: Object.values(state.orders),
  order: {
    total: '',
    user_id: '',
    product_id: '',
  },
});

const mdtp = (dispatch) => ({
  createOrder: (order) => dispatch(createOrder(order)),
  updateOrder: (orderId) => dispatch(updateOrder(orderId)),
  requestProduct: (productId) => dispatch(requestProduct(productId)),
  requestReviews: () => dispatch(requestReviews()),
  deleteReview:  (reviewId) => dispatch(deleteReview(reviewId)),
  requestUsers: () => dispatch(requestUsers()),
});

export default connect(mstp, mdtp)(ProductShow);
