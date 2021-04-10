import React from "react";
// import uhOh from "../../../app/assets/images/etsyUhOhpage.JPG"
class NotFound extends React.Component {
  constructor(props) {
    super(props); 
  }
  

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="notFoundContainer">
        <div className='error-img'>
        {/* <img src={uhOh} alt="uhOh"/> */}
        </div>
        <div className="wut"></div>
      </div>
    );
  }
}

export default NotFound;