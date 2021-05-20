import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import {requestReviews, deleteReview} from "../../actions/review_actions"
import ProductShow from "./product_show";
import {requestUsers} from "../../actions/user_actions"
import {createOrder, updateOrder, requestOrders} from "../../actions/order_actions"

const mstp = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
  reviews: Object.values(state.reviews),
  users: Object.values(state.entities.users),
  currentUserId: state.session.id,
  orders: Object.values(state.orders),
  order: {
    total: '',
    user_id: '',
    product_id: [],
  },
});

const mdtp = (dispatch) => ({
  requestOrders: () => dispatch(requestOrders()),
  createOrder: (order) => dispatch(createOrder(order)),
  updateOrder: (order, orderId) => dispatch(updateOrder(order, orderId)),
  requestProduct: (productId) => dispatch(requestProduct(productId)),
  requestReviews: () => dispatch(requestReviews()),
  deleteReview:  (reviewId) => dispatch(deleteReview(reviewId)),
  requestUsers: () => dispatch(requestUsers()),
});

export default connect(mstp, mdtp)(ProductShow);
