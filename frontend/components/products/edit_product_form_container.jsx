import React from "react";
import { connect } from "react-redux";
import { requestProduct, updateProduct } from "../../actions/product_actions";
import ProductForm from "./product_form";

class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }
  render() {
    const { currentUserId, product, formType, submitProduct } = this.props;

    if (!product) return null;
    return (
      <ProductForm
        currentUserId={currentUserId}
        product={product}
        formType={formType}
        submitProduct={submitProduct}
      />
    );
  }
}
const mstp = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
  formType: "Update Product",
  currentUserId: state.session.id,
});

const mdtp = (dispatch) => ({
  requestProduct: (productId) => dispatch(requestProduct(productId)),
  submitProduct: (product, id) => dispatch(updateProduct(product, id)),
});

export default connect(mstp, mdtp)(EditProductForm);
