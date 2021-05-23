import React from "react";
import {Link} from "react-router-dom"
class Purchased extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {


   
    return (
      <div className="login-form-container">

        <form  className="login-form-box">
          <div className="topOfForm">
            <p id="currentForm">
              <div className="center-text">
              Thank you for using baskEtsy!
              </div>
            </p>
          </div>
        <div className="purchase-form-outer-container">
          <div>

          <label>
            I would love for you to be able to buy
              <br />  
            baskets of puppies to love forever!          
            </label>            
            <br /> 
            <br /> 
            Since thats not actually possible
            <br /> 
             I instead encourage you
            <br /> 
            to consider adopting a friend
            <br /> 
            from the ASPCA! 
          </div>
          
            <br />
            <Link onClick={() => window.location.href="https://www.aspca.org/adopt-pet/find-shelter"}>
            <div className="aspca-link"></div>
            </Link>            
        <div>
            <br />          
            <br />   
            While you wait for your new forever friend    
           <br />
           check out my other projects below!
           <br /> 
        </div>
         
          <div className="login-form purchased-form">        
        
            <br />
            My other projects:
            <br />
            <div className="project-links">

            <Link onClick={() => window.location.href="https://mdean7.github.io/GnomeSquadron/"}>
              <div className="gnome-link"></div>
            </Link>     
            
            <Link onClick={() => window.location.href="https://hydrarium.herokuapp.com/#/"}>
              <div className="arium-link"></div>
            </Link>  
            
            </div>
          </div>

        </div>

          <br />
          <br /> 
          Thank you again,         
          <br/>
          Michael Dean
        </form>
        
      </div>
    );
  }
}

export default Purchased;
