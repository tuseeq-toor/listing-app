import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { mapStateToProps, mapDispatchToProps } from "./Action/Action";
import { connect } from "react-redux";

class Topnavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home",
      loginPopup: false,
      registerPopup: false,
    };
  }
  handleTab = (e, tabName) => {
    this.setState({ activeTab: tabName });
  };

  hanldeLoginPop = (e) => {
    e.preventDefault();
    debugger
    this.setState({ loginPopup: !this.state.loginPopup });
  };
  hanldeRegisterPop = (e) => {
    e.preventDefault();
    this.setState({ registerPopup: !this.state.registerPopup });
  };
  render() {
    const { activeTab, loginPopup, registerPopup } = this.state;
    return (
      <React.Fragment>
        {/*Topbar*/}
        <div className="header-main">
          {!this.props.loginToken ? (
            <div className="top-bar">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-sm-8 col-5">
                    <div className="top-bar-right">
                      <ul className="custom">
                        <li>
                          <a
                            href="register.html"
                            className="text-dark"
                            onClick={this.hanldeRegisterPop}
                          >
                            <i className="fa fa-user me-1" />{" "}
                            <span>Register</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-dark"
                            onClick={this.hanldeLoginPop}
                          >
                            <i className="fa fa-sign-in me-1" />{" "}
                            <span>Login</span>
                          </a>
                        </li>
                        <li className="dropdown">
                          {/* <a
                        href="#"
                        className="text-dark"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fa fa-home me-1" />
                        <span> My Dashboard</span>
                      </a> */}
                          <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="mydash.html" className="dropdown-item">
                              <i className="dropdown-icon icon icon-user" /> My
                              Profile
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="dropdown-icon icon icon-speech" />{" "}
                              Inbox
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="dropdown-icon icon icon-bell" />{" "}
                              Notifications
                            </a>
                            <a href="mydash.html" className="dropdown-item">
                              <i className="dropdown-icon  icon icon-settings" />{" "}
                              Account Settings
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="dropdown-icon icon icon-power" />{" "}
                              Log out
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Mobile Header */}
          <div className="sticky">
            <div className="horizontal-header clearfix ">
              <div className="container">
                <a id="horizontal-navtoggle" className="animated-arrow">
                  <span />
                </a>
                <span className="smllogo">
                  <img
                    className="mobile-light-logo"
                    src="../assets/images/brand/logo.png"
                    width={120}
                    alt=""
                  />
                  <img
                    className="mobile-dark-logo"
                    src="../assets/images/brand/logo1.png"
                    width={120}
                    alt=""
                  />
                </span>
                <a href="tel:245-6325-3256" className="callusbtn">
                  <i className="fa fa-phone" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* /Mobile Header */}
          <div className="horizontal-main bg-dark-transparent clearfix">
            <div className="horizontal-mainwrapper container clearfix">
              <div className="desktoplogo" style={{ height: "80px" }}>
                <a href="index.html">
                  <img
                    src="../assets/images/brand/newLogo2.png"
                    alt=""
                    height="100%"
                  />
                </a>
              </div>
              <div className="desktoplogo-1" style={{ height: "80px" }}>
                <a href="index.html">
                  <img
                    src="../assets/images/brand/newLogo.png"
                    alt=""
                    height="100%"
                  />
                </a>
              </div>
              {/*Nav*/}
              <nav
                className="horizontalMenu clearfix d-md-flex"
                style={{ fontSize: "16px" }}
              >
                <div className="overlapblackbg" />
                <ul className="horizontalMenu-list">
                  <li aria-haspopup="true">
                    <Link
                      to="/"
                      className={activeTab === "Home" ? "active" : ""}
                      onClick={(e) => this.handleTab(e, "Home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <span className="horizontalMenu-click">
                      <i className="horizontalMenu-arrow fa fa-angle-down" />
                    </span>
                    <Link
                      to="browse_categories"
                      className={
                        activeTab === "Browse Categories" ? "active" : ""
                      }
                      onClick={(e) => this.handleTab(e, "Browse Categories")}
                    >
                      Browse Categories{" "}
                      <span className="fa fa-caret-down m-0" />
                    </Link>
                    <ul className="sub-menu">
                      <li aria-haspopup="true">
                        <a href="classified.html">Restaurant</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">Clothing </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">Services</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">Education </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">Beauty</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">
                          Sports &amp; Outdoors
                        </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="classified-right.html">
                          Sports &amp; Outdoors
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <Link
                      to="about_us"
                      className={activeTab === "About Us" ? "active" : ""}
                      onClick={(e) => this.handleTab(e, "About Us")}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link
                      to="contact_us"
                      className={activeTab === "Contact Us" ? "active" : ""}
                      onClick={(e) => this.handleTab(e, "Contact Us")}
                    >
                      Contact Us <span className="wsarrow" />
                    </Link>
                  </li>
                  <li aria-haspopup="true" className="PostFreeAdd">
                    {!this.props.loginToken ? (
                      <a
                        onClick={this.hanldeLoginPop}
                        className="btn btn-sm btn-warning text-white"
                      >
                        Post Free Ad
                      </a>
                    ) : (
                      <Link
                        to="ad_post"
                        onClick={(e) => this.handleTab(e, "")}
                        className="btn btn-sm btn-warning text-white"
                      >
                        Post Free Ad
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
              {/*Nav*/}
            </div>
          </div>
        </div>
        {loginPopup ? (
          <Login open={loginPopup} close={this.hanldeLoginPop} />
        ) : null}
        {registerPopup ? (
          <Register open={registerPopup} close={this.hanldeRegisterPop} />
        ) : null}
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topnavbar);
