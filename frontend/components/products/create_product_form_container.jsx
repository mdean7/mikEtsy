import {connect} from 'react-redux'
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';


const mstp = (state) =>({
  product: {description:'', title:'', price:'', user_id: state.session.id},
  formType: 'Create Product',
  currentUserId: state.session.id
})

const mdtp = (dispatch) =>({
  submitProduct: (product) => dispatch(createProduct(product))
})

export default connect(mstp, mdtp)(ProductForm)