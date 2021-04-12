import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { requestProducts, deleteProduct } from "../../actions/product_actions";
import UserShow from "./user_show";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    products: Object.values(state.products),
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  requestProducts: () => dispatch(requestProducts()),
  deleteProduct: (productId) => dispatch(deleteProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
