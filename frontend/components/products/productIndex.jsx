import React from "react";

class ProductIndex extends React.Component {
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
      <div >
    <div className="divideBar"></div>
    <div className="colorBar">
      <h1 className="mothersDay">Because every mom deserves something as unique as she is.</h1>
      <h2 className="shopMothers">Shop Mother’s Day</h2>
    </div>
      <p className="recentImages"></p>
      </div>
    );
  }
}

export default ProductIndex;