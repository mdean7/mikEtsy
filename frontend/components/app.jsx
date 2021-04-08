import React from "react";
import {Route, Switch, Link} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';


const NoMatchPage = () => {
  return (
    <div className='error-img'>
    
    </div>
  );
};


const App = () => (
  <div>
    <Modal />
    <header>
    <Link to="/" className="header-link">
    <h1>mikEtsy</h1>
    </Link>
    <GreetingContainer />
    </header>
    <div className="divideBar"></div>
    <div className="colorBar">
      <h1 className="mothersDay">Because every mom deserves something as unique as she is.</h1>
      <h2 className="shopMothers">Shop Mother’s Day</h2>
    </div>
      <p className="recentImages"></p>
      <Switch>
      {/* <AuthRoute exact path="/login" component={} />
      <AuthRoute exact path="/signup" component={} />  */}
      <Route component={NoMatchPage} />
      </Switch>
  </div>
);

export default App;