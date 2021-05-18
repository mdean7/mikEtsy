import { combineReducers } from "redux";

import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer"
import products from "./products_reducer"
import reviews from "./reviews_reducer"
import orders from "./orders_reducer"

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
  products,
  reviews,
  orders
});

export default rootReducer;
