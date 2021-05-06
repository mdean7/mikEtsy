import React from "react";
// import uhOh from "../../../app/assets/images/etsyUhOhpage.JPG"
class ProductNotFound extends React.Component {
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
        <div className="error-img">
          <div className="not-found-text">
            <div className="big-text">
              We couldn't find any results for your input.
            </div>
            <div className="small-text">
              Try searching for something else instead?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductNotFound;
