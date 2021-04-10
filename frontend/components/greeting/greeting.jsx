import React from 'react';
import { Link } from 'react-router-dom';
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
      <h2 className="header-name">Welcome back, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Sign out</button>
    </hgroup>)
  };

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
