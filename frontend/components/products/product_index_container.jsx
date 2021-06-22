import { connect } from "react-redux";
import { requestProducts, deleteProduct } from "../../actions/product_actions";
import { requestUsers} from "../../actions/user_actions"
import ProductIndex from "./product_index";

const mstp = (state) => {
  return {
    products: Object.values(state.products),
    currentUserId: state.session.id,
    owners: state.entities.users
  };
};

const mdtp = (dispatch) => ({
  requestUsers: () => dispatch(requestUsers()),
  requestProducts: () => dispatch(requestProducts()),
  deleteProduct: (productId) => dispatch(deleteProduct(productId)),
});

export default connect(mstp, mdtp)(ProductIndex);
