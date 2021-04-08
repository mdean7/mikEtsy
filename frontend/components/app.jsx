import React from "react";
import {Route, Switch, Link} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

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
    {/* <Switch>          
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch> */}
  </div>
);

export default App;