import React from "react";
import {Route, Switch, Link} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'
import NotFound from './pagenotfound/notFound'
import EditProductFormContainer from './products/edit_product_form_container';
import CreateProductFormContainer from './products/create_product_form_container';



const App = () => (
  <div>
    <Modal />
    <header>
    <Link to="/" className="header-link">
    <h1>mikEtsy</h1>
    </Link>
    <GreetingContainer />
    </header>
      
      <Switch>
        <Route exact path="/" component={ProductIndexContainer}/>
        <Route path="/products/new" component={CreateProductFormContainer} />
        <Route exact path="/products/:productId" component={ProductShowContainer}/>     
        <Route path="/products/:productId/edit" component={EditProductFormContainer} />
        <Route component={NotFound} />
      </Switch>
  </div>
);

export default App;