import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';



const Greeting = ({ currentUser, logout, openModal, closeModal }) => {
  const sessionLinks = () => (
    <nav className="login-modal-button">
      <button className="login-signup" onClick={() => openModal('login')}>sign in</button>     
    </nav>
  );

  const personalGreeting = () => {
    closeModal();
    return(
    <hgroup className="header-group">
      <button>
      <Link className="store-button" to="/user/show">Store Manager</Link>
      </button>
      {/* <h2 className="header-name">Welcome back, {currentUser.username}!</h2> */}
      <Link to="/">
      <button className="header-button" onClick={logout} >Sign out</button>
      </Link>      
    </hgroup>)
  };

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
