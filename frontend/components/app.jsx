import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import NotFound from "./pagenotfound/notFound";
import EditProductFormContainer from "./products/edit_product_form_container";
import CreateProductFormContainer from "./products/create_product_form_container";

const App = () => (
  <div>
    <Modal />

    {/* Header/Navbar */}
    <header>
      <Link to="/" className="header-link">
        <h1> Sokka </h1>
      </Link>
      <GreetingContainer />
    </header>
    <div className="divideBar"></div>

    {/* Main Content */}
    <div className="containerMain">
      <Switch>
        <Route path="/products/new" component={CreateProductFormContainer} />
        <Route
          exact
          path="/products/:productId"
          component={ProductShowContainer}
        />
        <Route
          path="/products/:productId/edit"
          component={EditProductFormContainer}
        />
        <Route exact path="/" component={ProductIndexContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>

    {/* Footer */}
    <footer>
      <div className="botDivLine" />
      <div className="bottomBarTop" />
      <div className="bottomBarBottom" />
    </footer>
  </div>
);

export default App;
