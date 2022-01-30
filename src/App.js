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
import PostAdd from "./Component/PostAdd";
import { Provider } from "react-redux";
import Store from "./Component/Store";
import MyAds from "./Component/MyAds";
const App = () => {
  useEffect(() => {
    ExternalJsCall();
    stickyHeader();
  }, []);
  return (
    <div className="main-body">
      <div className="horizontalMenucontainer">
        <Provider store={Store}>
          <Router>
            {/*Topbar*/}
            <Topnavbar />
            {/*Topbar*/}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact_us" element={<Contact />} />
              <Route path="about_us" element={<About />} />
              <Route path="browse_categories" element={<BrowseCategories />} />
              <Route path="ad_post" element={<PostAdd />} />
              <Route path="my_ads" element={<MyAds/>} />

            </Routes>
            {/*Footer Section*/}
            <Footer />
            {/*Footer Section*/}
          </Router>
        </Provider>
      </div>
    </div>
  );
};

export default App;
