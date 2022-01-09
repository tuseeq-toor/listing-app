import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Component/Footer";
import Topnavbar from "./Component/Topnavbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import $ from "jquery";

function App() {
  $(window).scroll(function () {
    var sticky = $(".sticky-wrapper"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("is-sticky");
    else sticky.removeClass("is-sticky");
  });
  return (
    <div className="main-body">
      <div className="horizontalMenucontainer">
        <Router>
          {/*Topbar*/}
          <Topnavbar />
          {/*Topbar*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact_us" element={<Contact />} />
            <Route path="about_us" element={<About />} />
          </Routes>
          {/*Footer Section*/}
          <Footer />
          {/*Footer Section*/}
        </Router>
      </div>
    </div>
  );
}

export default App;
