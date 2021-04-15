import React from "react";
import { Redirect } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.state.redirectToReferrer = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUserId === this.state.user_id) {
      this.props.submitReview(this.state, this.state.id);
      this.setState({redirectToReferrer: true})
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer) {
        return <Redirect to={`/products/${this.state.product_id}`} />
    }

    return (
      <div className="review-form-container">
        <div className="form-title">{this.props.formType}</div>

        <form onSubmit={this.handleSubmit}>
          <div className="listing-details">
            <div className="listing-details-text">Review details</div>
            <div className="ld-pairs">
              <div className="listing-details-title-text-area">
                <div className="listing-details-title-text">Title</div>
                <div className="cat-explanation">
                  Give your review a short title.
                </div>
              </div>
              <input
                type="text"
                onChange={this.update("title")}
                value={this.state.title}
                required
              />
            </div>
            <div className="ld-pairs">
              <div className="description-text-area">
                <div className="description-text">Body</div>
                <div className="cat-explanation">
                  Tell the shop owner and other users what you think about this
                  product! Shop owners have the power to delete your reviews so
                  try to keep them honest but dont use any vulgar or offensive
                  language.
                </div>
              </div>
              <textarea
                onChange={this.update("body")}
                value={this.state.body}
                required
              />
            </div>
          </div>
          <div className="inventory-pricing">
            <div className="inv-price-text">Star ratings</div>
            <div className="ld-pairs">
              <div>
                <div className="price-text">Rating</div>
                <div>Please give this product a rating from 1 to 5.</div>
              </div>
              <div className="price-input-field">
                <input
                  type="number"
                  min="0"
                  max="5"
                  onChange={this.update("rating")}
                  value={this.state.rating}
                  required
                />
              </div>
            </div>
          </div>

          {/* <input className="publish-button" type="submit"/> */}
          <button className="publish-button" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
}
export default ReviewForm;
