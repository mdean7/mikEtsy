import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mstp = (state) => ({
  review: {
    body: "",
    title: "",
    rating: 5,
    user_id: state.session.id,
    product_id: state.products[1].id
  },
  formType: "Add a new review",
  currentUserId: state.session.id,
});

const mdtp = (dispatch) => ({
  submitReview: (review) => dispatch(createReview(review)),
});

export default connect(mstp, mdtp)(ReviewForm);
