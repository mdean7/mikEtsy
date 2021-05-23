import { connect } from "react-redux";
import {closeModal } from "../../actions/modal_actions";
import Purchased from "./purchased";

const mapStateToProps = () => {
  return {  
    formType: "purchased",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchased);