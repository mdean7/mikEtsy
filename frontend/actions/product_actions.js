import * as ProductAPIUtil from '../util/product_api_util';


export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
});

export const requestProducts = () => (dispatch)=> (
  ProductAPIUtil.fetchProducts()
  .then((products) => dispatch(receiveProducts(products)))
);

export const requestProduct = (productId) => (dispatch) =>(
  ProductAPIUtil.fetchProduct(productId)
  .then((product) =>dispatch(receiveProduct(product)))
);

export const createProduct = (product) => (dispatch)=> (
  ProductAPIUtil.createProduct(product)
  .then((product) => dispatch(receiveProduct(product)))
);


export const updateProduct = (product) => (dispatch)=> (
  ProductAPIUtil.updateProduct(product)
  .then((product) => dispatch(receiveProduct(product)))
);

export const deleteProduct = (productId) => (dispatch) =>(
  ProductAPIUtil.deleteProduct(productId)
  .then(() => dispatch(removeProduct(productId)))
);
