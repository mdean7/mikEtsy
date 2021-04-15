import { connect } from "react-redux";
import { requestProducts} from "../../actions/product_actions";
import AutoSearch from "./auto_search";

const mstp = (state) => {
  return {
    products: Object.values(state.products),
    currentUserId: state.session.id,
    titles: Object.values(state.products).map(product =>([product.title, product.id])),
  };
};

const mdtp = (dispatch) => ({
  requestProducts: () => dispatch(requestProducts()),
});

export default connect(mstp, mdtp)(AutoSearch);