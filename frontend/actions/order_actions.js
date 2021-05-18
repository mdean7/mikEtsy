import * as OrderAPIUtil from '../util/order_api_util';


export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";

export const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders
});

export const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order
});

export const removeOrder = (orderId) => ({
  type: REMOVE_ORDER,
  orderId
});

export const requestOrders = () => (dispatch)=> (
  OrderAPIUtil.fetchOrders()
  .then((orders) => dispatch(receiveOrders(orders)))
);

export const requestOrder = (orderId) => (dispatch) =>(
  OrderAPIUtil.fetchOrder(orderId)
  .then((order) =>dispatch(receiveOrder(order)))
);

export const createOrder = (order) => (dispatch)=> (
  OrderAPIUtil.createOrder(order)
  .then((order) => dispatch(receiveOrder(order)))
);

export const updateOrder = (order, id) => (dispatch)=> (
  OrderAPIUtil.updateOrder(order, id)
  .then((order) => dispatch(receiveOrder(order)))
);