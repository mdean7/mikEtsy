import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";

const mstp = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
});

const mdtp = (dispatch) => ({
  requestProduct: (productId) => dispatch(requestProduct(productId)),
});

export default connect(mstp, mdtp)(ProductShow);
