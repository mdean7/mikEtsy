import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal, closeModal }) => {
  const sessionLinks = () => (
    <nav className="login-modal-button">
      <button className="login-signup" onClick={() => openModal("login")}>
        sign in
      </button>
    </nav>
  );

  const personalGreeting = () => {
    useEffect(() => {
      closeModal();
    });
    return (
      <hgroup className="header-group">
        <div className="shop-icon-container">
          <button>
            <Link className="shop-button" to="/user/show">
              <div className="shop-icon"></div>
            </Link>
          </button>
        </div>

        <Link to="/">
          <button className="header-button" onClick={logout}>
            Sign out
          </button>
        </Link>
      </hgroup>
    );
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
