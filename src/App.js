import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Component/Footer";
import Topnavbar from "./Component/Topnavbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import BrowseCategories from "./Component/BrowseCategories";
import "./assets/js";
import { useEffect } from "react";
import { ExternalJsCall } from "./Utitlies/LoadExternalJs";
import { stickyHeader } from "./Utitlies/stickyHeader";
const App = () => {
  
  useEffect(() => {
    ExternalJsCall();
    stickyHeader()
  }, []);
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
            <Route path="browse_categories" element={<BrowseCategories />} />
          </Routes>
          {/*Footer Section*/}
          <Footer />
          {/*Footer Section*/}
        </Router>
      </div>
    </div>
  );
};

export default App;
