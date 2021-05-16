import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  REMOVE_ORDER,
} from "../actions/order_actions";

const OrdersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    case RECEIVE_ORDER:
      newState[action.order.id] = action.order;
      return newState;
    case REMOVE_ORDER:
      delete newState[action.orderId];
      return newState;
    default:
      return oldState;
  }
};

export default OrdersReducer;