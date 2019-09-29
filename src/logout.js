import * as actionCreators from "./store/actions";

import React from "react";
import { connect } from "react-redux";

const Logout = props => {
  return (
    <button className="btn btn-danger" onClick={() => props.logout}>
      Logout {props.user.username}
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Logout);
