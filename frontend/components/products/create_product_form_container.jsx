import {connect} from 'react-redux'
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';


const mstp = () =>({
  product: {description:'', date:''},
  formType: 'Create Product'
})

const mdtp = (dispatch) =>({
  submitProduct: (product) => dispatch(createProduct(product))
})

export default connect(mstp, mdtp)(ProductForm)