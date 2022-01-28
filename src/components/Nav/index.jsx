import React from "react";
import logo from "../../components/Image/logo.png";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="top">
      <div className="top-header">
        <div className="top-header-link">
          <div className="info">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span id="info-phone">+91 8527853048</span>
            <a href="mailto:info@fincomienzo.com" id="info-email">
              <i class="fa fa-envelope"></i>
              info@fincomienzo.com
            </a>
          </div>
        </div>
        <div className="social-icon">
          <a href="https://www.facebook.com/fincomienzosolutions">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/fincomienzo1">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/fincomienzo-solutions">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <nav>
        <div className="nav">
          <div className="nav-link wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items">
              <NavLink
                className="nav-item"
                to="/"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>

              <NavLink className="nav-item" to="/jobs" activeClassName="active">
                Jobs
              </NavLink>

              <NavLink
                className="nav-item"
                to="/business"
                activeClassName="active"
              >
                Business
              </NavLink>

              <NavLink
                className="nav-item"
                to="/study"
                activeClassName="active"
              >
                StudyAbroad
              </NavLink>
            </div>

            <div className="sign-in-btn wrapper">
              {/* <NavLink href="#" id="sign-in" className="jobSeeker-signIn">
                SignIn
              </NavLink> */}
              <div className="divider"></div>
              <NavLink to="/registration" id="employer" className="rg-signIn">
                Employer
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
