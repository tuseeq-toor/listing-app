import React, { useEffect, useState } from "react";
import { ExternalJsCall } from "../Utitlies/LoadExternalJs";
import { Link } from "react-router-dom";
import Product from "./Product";

const BrowseCategories = () => {
  useEffect(() => {
    ExternalJsCall();
  }, []);

  const handlePageKey=(key)=>{
    setCurrentPageKey(key)
  }

  const [CurrentPageKey, setCurrentPageKey] = useState(100);
  const browseCategory = (
    <React.Fragment>
      <div>
        {/*Sliders Section*/}
        <div>
          <div
            className="cover-image sptb-1 bg-background"
            data-bs-image-src="../assets/images/banners/banner1.jpg"
          >
            <div className="header-text1 mb-0">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="text-center text-white">
                      <h1 className>
                        <span className="font-weight-bold">16,25,365</span>{" "}
                        Product Available
                      </h1>
                    </div>
                    <div className="search-background bg-transparent mb-0">
                      <div className="form row g-0">
                        <div className="form-group col-xl-10 col-lg-9 col-md-12 mb-0">
                          <input
                            type="text"
                            className="
                    form-control
                    input-lg
                    border-end-0
                    br-be-0 br-te-0
                  "
                            id="text"
                            placeholder="What are you looking for?"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                          <a
                            href="#"
                            className="btn btn-lg btn-block btn-primary br-bs-0 br-ts-0"
                          >
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /header-text */}
          </div>
        </div>
        {/*/Sliders Section*/}
        {/*Breadcrumb*/}
        <div className="bg-white border-bottom">
          <div className="container">
            <div className="page-header">
              {/* <h4 className="page-title">Product list</h4> */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Browse Categories
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/*/Breadcrumb*/}
        {/*Add listing*/}
        <section className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                {/*Add lists*/}
                <div className="mb-lg-0">
                  <div className>
                    <div className="item2-gl">
                      <div className="mb-0">
                        <div className>
                          <div className="row">
                            <div className="col-lg-3 col-md-12">
                              <h6 className="mb-0 mt-2">
                                Showing 1 to 10 of 30 entries
                              </h6>
                            </div>
                            <div className="col-lg-4 col-md-12 d-flex">
                              <select className="form-control form-control-sm">
                                <option value="volvo">
                                  Search by Category
                                </option>
                                <option value="saab">Animal</option>
                                <option value="mercedes">Jobs</option>
                                <option value="audi">Property</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-12 d-flex">
                              <select className="form-control form-control-sm">
                                <option value="volvo">
                                  Search by Location
                                </option>
                                <option value="saab">USA</option>
                                <option value="mercedes">UK</option>
                                <option value="audi">Canada</option>
                              </select>
                            </div>
                            <div className="col-lg-2 col-md-12">
                              <select className="form-control form-control-sm">
                                <option value="volvo">Sort by</option>
                                <option value="saab">Date</option>
                                <option value="mercedes">Price</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab-12">
                          <div className="row">
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="ribbon ribbon-top-left text-danger">
                                  <span className="bg-danger">featured</span>
                                </div>
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/h4.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">RealEstate</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        2BK flat
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $263.99
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="ribbon ribbon-top-left text-danger">
                                  <span className="bg-danger">featured</span>
                                </div>
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/j2.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist active"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Jobs</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        Horbica Consulting
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $745.00
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="ribbon ribbon-top-left text-danger">
                                  <span className="bg-danger">featured</span>
                                </div>
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xl-3">
                              <div className="card overflow-hidden">
                                <div className="item-card9-img">
                                  <div className="item-card9-imgs">
                                    <a onClick={()=>handlePageKey(101)} style={{cursor:"pointer"}}/>
                                    <img
                                      src="../assets/images/products/pe1.png"
                                      alt="img"
                                      className="cover-image"
                                    />
                                  </div>
                                  <div className="item-card9-icons">
                                    <a
                                      href="#"
                                      className="item-card9-icons1 wishlist"
                                    >
                                      <i className="fa fa fa-heart-o" />
                                    </a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card9">
                                    <a href="classified.html">Animals</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        kenco petcenter
                                      </h4>
                                    </a>
                                    <p>
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                    <ul className="item-cards7-ic mb-0">
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-location-pin text-muted me-1" />
                                          UK
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="icons">
                                          <i className="icon icon-event text-muted me-1" />{" "}
                                          1 hours ago
                                        </a>
                                      </li>
                                      <li style={{ width: "100%" }}>
                                        <a href="#" className="icons">
                                          <i className="icon icon-phone text-muted me-1" />{" "}
                                          14 675 65430
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="card-footer">
                                  <div className="item-card9-footer d-flex">
                                    <div className="item-card9-cost">
                                      <h4
                                        className="
                                text-dark
                                font-weight-semibold
                                mb-0
                                mt-0
                              "
                                      >
                                        $149.00
                                      </h4>
                                    </div>
                                    <div class="ms-auto">
                                      <div
                                        class="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="center-block text-center">
                      <ul className="pagination mb-5">
                        <li className="page-item page-prev disabled">
                          <a className="page-link" href="#" tabIndex={-1}>
                            Prev
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item page-next">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/Add lists*/}
              </div>
            </div>
          </div>
        </section>
        {/*/Add Listings*/}
      </div>
    </React.Fragment>
  );
  const product = <Product />;
  if (CurrentPageKey === 100) {
    return <React.Fragment>{browseCategory}</React.Fragment>;
  }
   else if (CurrentPageKey === 101) {
    return <React.Fragment>{product}</React.Fragment>;
  }
};
export default BrowseCategories;
