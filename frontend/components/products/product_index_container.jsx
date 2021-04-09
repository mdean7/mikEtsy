import { connect } from 'react-redux';
import { requestProducts, deleteProduct } from '../../actions/product_actions';
import ProductIndex from './product_index';



const mstp = (state) =>{  
  return{
  products: Object.values(state.products)
}}

const mdtp = (dispatch) =>({
  requestProducts: () => dispatch(requestProducts()),
  deleteProduct: (productId) => dispatch(deleteProduct(productId))
})

export default connect(mstp, mdtp)(ProductIndex)