import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnavbar = ({ history }) => {
  const handleTab = (e, tabName) => {
    setActiveTab(tabName);
  };

  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header-main">
      {/* Mobile Header */}
      {/* <Link></Link> */}
      <div className="sticky sticky-pin" style={{ marginBottom: "0px" }}>
        <div className="horizontal-header clearfix">
          <div className="container">
            <a id="horizontal-navtoggle" className="animated-arrow">
              <span />
            </a>
            <span className="smllogo">
              <img
                className="mobile-light-logo"
                src="../assets/images/brand/newLogo.png"
                alt=""
                height="100%"
              />
              <img
                className="mobile-dark-logo"
                src="../assets/images/brand/newLogo.png"
                alt=""
                height="100%"
              />
            </span>
            <a href="tel:245-6325-3256" className="callusbtn">
              <i className="fa fa-phone" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="jumps-prevent" style={{ paddingTop: "0px" }} />
      {/* /Mobile Header */}
      <div
        id="sticky-wrapper"
        className="sticky-wrapper"
        style={{
          height: "80px",
        }}
      >
        <div
          className="horizontal-main bg-dark-transparent clearfix"
          style={{
            width: "1349px",
            position: " fixed",
            top: "0px",
            zIndex: "inherit",
          }}
        >
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
                    onClick={(e) => handleTab(e, "Home")}
                  >
                    Home
                  </Link>
                </li>
                <li aria-haspopup="true">
                  <Link
                    to="about_us"
                    className={activeTab === "About Us" ? "active" : ""}
                    onClick={(e) => handleTab(e, "About Us")}
                  >
                    About Us{" "}
                  </Link>
                </li>
                <li aria-haspopup="true">
                  <span className="horizontalMenu-click">
                    <i className="horizontalMenu-arrow fa fa-angle-down" />
                  </span>
                  <a
                    href="#"
                    className={
                      activeTab === "Product Categories" ? "active" : ""
                    }
                    onClick={(e) => handleTab(e, "Product Categories")}
                  >
                    Product Categories <span className="fa fa-caret-down m-0" />
                  </a>
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
                      <a href="classified-right.html">Sports &amp; Outdoors</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="classified-right.html">Sports &amp; Outdoors</a>
                    </li>
                  </ul>
                </li>
                <li aria-haspopup="true">
                  <Link
                    to="contact_us"
                    className={activeTab === "Contact Us" ? "active" : ""}
                    onClick={(e) => handleTab(e, "Contact Us")}
                  >
                    Contact Us <span className="wsarrow" />
                  </Link>
                </li>
                <li aria-haspopup="true">
                  <a href="contact.html" className="btn btn-sm btn-warning">
                    Post Free Ad
                  </a>
                </li>
              </ul>
            </nav>
            {/*Nav*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topnavbar;
