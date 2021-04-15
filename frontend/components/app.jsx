import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute, Redirect  } from "../util/route_util";
import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import NotFound from "./pagenotfound/not_found";
import EditProductFormContainer from "./products/edit_product_form_container";
import CreateProductFormContainer from "./products/create_product_form_container";
import UserShowContainer from "./user/user_show_container"
import EditReviewFormContainer from "./reviews/edit_review_form_container";
import CreateReviewFormContainer from "./reviews/create_review_form_container";
import AutoSearchContainer from "./search/auto_search_container"





const App = () => (
  <div>
    <Modal />

    {/* Header/Navbar */}
    <header>
      <Link to="/" className="header-link">
        <h1> baskEtsy </h1>
      </Link>
      {/* Search Bar  */}    
      <AutoSearchContainer/>
      
      <GreetingContainer />
    </header>
    <div className="divideBar"></div>

    {/* Main Content */}
    <div className="containerMain">
      <Switch>
        <Route exact path="/products/new" component={CreateProductFormContainer} />
        <Route exact path="/products/:productId" component={ProductShowContainer} />
        <Route exact path="/products/:productId/edit" component={EditProductFormContainer} />
        <AuthRoute  path="/user/show" component={UserShowContainer} />
        <Route exact path="/reviews/new" component={CreateReviewFormContainer} />
        <Route exact path="/reviews/:reviewId/edit" component={EditReviewFormContainer} />
        <Route exact path="/" component={ProductIndexContainer} />
        <Route path="/youLostBB???" component={NotFound} />
        <Route  component={NotFound} />
      </Switch>
    </div>

    {/* Footer */}
    <footer>
      <div className="botDivLine" />
      <div className="bottomBarTop" />
      <div className="bottomBarBottom">
        <i className="fab fa-github git-icon"></i>
      </div>
    </footer>
  </div>
);

export default App;
