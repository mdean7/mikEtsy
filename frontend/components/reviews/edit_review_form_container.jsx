import React from "react";
import { connect } from "react-redux";
import { requestReview, updateReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

class EditReviewForm extends React.Component {
  componentDidMount() {
    this.props.requestReview(this.props.match.params.reviewId);
  }
  render() {
    const { currentUserId, review, formType, submitReview } = this.props;

    if (!review) return null;
    return (
      <ReviewForm
        currentUserId={currentUserId}
        review={review}
        formType={formType}
        submitReview={submitReview}
      />
    );
  }
}
const mstp = (state, ownProps) => ({
  review: state.reviews[ownProps.match.params.reviewId],
  formType: "Update this review",
  currentUserId: state.session.id,
});

const mdtp = (dispatch) => ({
  requestReview: (reviewId) => dispatch(requestReview(reviewId)),
  submitReview: (review, id) => dispatch(updateReview(review, id)),
});

export default connect(mstp, mdtp)(EditReviewForm);
