import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        {this.props.user ? (
          <div className="fixed-bottom">
            <button
              to="/logout"
              className="btn btn-success m-2 float-left"
              onClick={this.props.logout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="fixed-bottom">
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
            </Link>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
