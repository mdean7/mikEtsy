
import { connect } from 'react-redux';
import { requestOrders, createOrder, removeOrder, updateOrder} from '../../actions/order_actions';
import OrderForm from './order_form';

const mapStateToProps = state => { 
  
    return ({
    orderItems: Object.values(state.orders),
    currentUserId: state.session.id,
    products: Object.values(state.products),
})}

const mapDispatchToProps = dispatch => ({
  requestOrders: () => dispatch(requestOrders()),
  createOrder: order => dispatch(createOrder(order)),
  removeOrder: orderId => dispatch(removeOrder(orderId)),
  updateOrder: (data, id) => dispatch(updateOrder(data, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)