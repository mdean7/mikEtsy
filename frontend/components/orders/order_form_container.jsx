
import { connect } from 'react-redux';
import { requestOrders, createOrder, deleteOrder, updateOrder, removeOrder } from '../../actions/order_actions';
import OrderForm from './order_form';
import { openModal } from "../../actions/modal_actions"

const mapStateToProps = state => {
  return ({
    orderItems: Object.values(state.orders),
    currentUserId: state.session.id,
    products: Object.values(state.products),
  })
}

const mapDispatchToProps = dispatch => ({
  requestOrders: () => dispatch(requestOrders()),
  createOrder: order => dispatch(createOrder(order)),
  deleteOrder: orderId => dispatch(deleteOrder(orderId)),
  updateOrder: (data, id) => dispatch(updateOrder(data, id)),
  removeOrder: orderId => dispatch(removeOrder(orderId)),
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)