import React, { useEffect } from "react";
import { ExternalJsCall } from "../Utitlies/LoadExternalJs";
import { Link } from "react-router-dom";

const BrowseCategories = () => {
  useEffect(() => {
    ExternalJsCall();
  }, []);
  return (
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
                          placeholder="Search Products"
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
            <h4 className="page-title">Product list</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product Categories
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
            <div className="col-xl-9 col-lg-8 col-md-12">
              {/*Add lists*/}
              <div className="mb-lg-0">
                <div className>
                  <div className="item2-gl">
                    <div className="mb-0">
                      <div className>
                        <div className="p-5 bg-white item2-gl-nav d-flex">
                          <h6 className="mb-0 mt-2">
                            Showing 1 to 10 of 30 entries
                          </h6>
                          <ul className="nav item2-gl-menu ms-auto">
                            <li className>
                              <a
                                href="#tab-11"
                                className="active show"
                                data-bs-toggle="tab"
                                title="List style"
                              >
                                <i className="fa fa-list" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#tab-12"
                                data-bs-toggle="tab"
                                className
                                title="Grid"
                              >
                                <i className="fa fa-th" />
                              </a>
                            </li>
                          </ul>
                          <div className="d-flex">
                            <label className="me-2 mt-1 mb-sm-1">
                              Sort By:
                            </label>
                            <select
                              name="item"
                              className="form-control select2 select-sm w-70"
                            >
                              <option value={1}>Default</option>
                              <option value={1}>Date</option>
                              <option value={2}>Price</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab-11">
                        <div className="card overflow-hidden">
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="arrow-ribbon bg-primary">
                                Rent
                              </div>
                              <div className="item-card9-imgs">
                                <a href="classified.html" />
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
                            <div className="card border-0 mb-0">
                              <div className="card-body">
                                <div className="item-card9">
                                  <a href="classified.html">RealEstate</a>
                                  <a
                                    href="classified.html"
                                    className="text-dark"
                                  >
                                    <h4 className="font-weight-semibold mt-1">
                                      2BK flat
                                    </h4>
                                  </a>
                                  <p className="mb-0 leading-tight">
                                    Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam corporis suscipit
                                  </p>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
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
                                  <div className="ms-auto">
                                    <div
                                      className="rating-star sm my-rating-5"
                                      data-stars="4s"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden">
                          <div className="ribbon ribbon-top-left text-danger">
                            <span className="bg-danger">featured</span>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="classified.html" />
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
                            <div className="card mb-0 border-0">
                              <div className="card-body">
                                <div className="item-card9">
                                  <a href="classified.html">Jobs</a>
                                  <a
                                    href="classified.html"
                                    className="text-dark"
                                  >
                                    <h4 className="font-weight-semibold mt-1">
                                      Horbica Consulting
                                    </h4>
                                  </a>
                                  <p className="mb-0 leading-tight">
                                    Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam corporis suscipit
                                  </p>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
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
                                  <div className="ms-auto">
                                    <div
                                      className="rating-star sm my-rating-5"
                                      data-stars="4s"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden">
                          <div className="ribbon ribbon-top-left text-danger">
                            <span className="bg-danger">featured</span>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="classified.html" />
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
                            <div className="card border-0 mb-0">
                              <div className="card-body">
                                <div className="item-card9">
                                  <a href="classified.html">Animals</a>
                                  <a
                                    href="classified.html"
                                    className="text-dark"
                                  >
                                    <h4 className="font-weight-semibold mt-1">
                                      kenco petcenter
                                    </h4>
                                  </a>
                                  <p className="mb-0 leading-tight">
                                    Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam corporis suscipit
                                  </p>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
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
                                  <div className="ms-auto">
                                    <div
                                      className="rating-star sm my-rating-5"
                                      data-stars="4s"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden">
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $13
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/b3.png"
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
                            <div className="card border-0 mb-0">
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html">
                                      Beauty &amp; Spa
                                    </a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        Goozer Beauty &amp; Spa
                                      </h4>
                                    </a>
                                    <p className="mb-0 leading-tight">
                                      Ut enim ad minima veniam, quis nostrum
                                      exercitationem ullam corporis suscipit
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
                                <div className="item-card2-footer d-sm-flex">
                                  <div className="rating-star d-inline-flex">
                                    <div
                                      className="rating-star sm my-rating-5"
                                      data-stars="4s"
                                    />
                                    (145reviews)
                                  </div>
                                  <div className="ms-auto">
                                    <a href="#" className="location">
                                      <i className="fa fa-map-marker text-muted me-1" />
                                      Los Angles
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden">
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $42
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/h6.png"
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
                            <div className="card border-0 mb-0">
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html">Restaurant</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        GilkonStar Hotel
                                      </h4>
                                    </a>
                                    <p className="mb-0 leading-tight">
                                      Ut enim ad minima veniam, quis nostrum
                                      exercitationem ullam corporis suscipit
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
                                <div className="item-card2-footer d-sm-flex">
                                  <div className="rating-star d-inline-flex">
                                    <div
                                      className="rating-star sm my-rating-5"
                                      data-stars="4s"
                                    />
                                    (145reviews)
                                  </div>
                                  <div className="ms-auto">
                                    <a href="#" className="location">
                                      <i className="fa fa-map-marker text-muted me-1" />
                                      Los Angles
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden">
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $50
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/v1.png"
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
                            <div className="card border-0 mb-0">
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html" className>
                                      Vehicles
                                    </a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        Seep Automobiles
                                      </h4>
                                    </a>
                                    <p className="mb-0 leading-tight">
                                      Ut enim ad minima veniam, quis nostrum
                                      exercitationem ullam corporis suscipit
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer pt-4 pb-4">
                                <div className="item-card2-footer d-sm-flex">
                                  <div className="item-card2-rating">
                                    <div className="rating-star d-inline-flex">
                                      <div
                                        className="rating-star sm my-rating-5"
                                        data-stars="4s"
                                      />
                                      (46 reviews)
                                    </div>
                                  </div>
                                  <div className="ms-auto">
                                    <a href="#" className="location">
                                      <i className="fa fa-map-marker text-muted me-1" />
                                      San Francisco
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-12">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="item-card9-img">
                                <div className="arrow-ribbon bg-primary">
                                  Rent
                                </div>
                                <div className="item-card9-imgs">
                                  <a href="classified.html" />
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
                                  <div className="item-card9-desc">
                                    <a href="#" className="me-4">
                                      <span className>
                                        <i className="fa fa-map-marker text-muted me-1" />
                                        USA
                                      </span>
                                    </a>
                                    <a href="#" className>
                                      <span className>
                                        <i className="fa fa-calendar-o text-muted me-1" />
                                        Nov-15-2019
                                      </span>
                                    </a>
                                  </div>
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
                                  <div className="ms-auto">
                                    <div className="rating-star block">
                                      <div
                                        className="rating-star sm my-rating-5 me-2"
                                        data-stars="4s"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="ribbon ribbon-top-left text-danger">
                                <span className="bg-danger">featured</span>
                              </div>
                              <div className="item-card9-img">
                                <div className="item-card9-imgs">
                                  <a href="classified.html" />
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
                                  <div className="item-card9-desc">
                                    <a href="#" className="me-4">
                                      <span className>
                                        <i className="fa fa-map-marker text-muted me-1" />
                                        UK
                                      </span>
                                    </a>
                                    <a href="#" className>
                                      <span className>
                                        <i className="fa fa-calendar-o text-muted me-1" />
                                        Dec-05-2018
                                      </span>
                                    </a>
                                  </div>
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
                                  <div className="ms-auto">
                                    <div className="rating-star block">
                                      <div
                                        className="rating-star sm my-rating-5 me-2"
                                        data-stars="4s"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="ribbon ribbon-top-left text-primary">
                                <span className="bg-primary">featured</span>
                              </div>
                              <div className="item-card9-img">
                                <div className="item-card9-imgs">
                                  <a href="classified.html" />
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
                                  <div className="item-card9-desc">
                                    <a href="#" className="me-4">
                                      <span className>
                                        <i className="fa fa-map-marker text-muted me-1" />
                                        UK
                                      </span>
                                    </a>
                                    <a href="#" className>
                                      <span className>
                                        <i className="fa fa-calendar-o text-muted me-1" />
                                        Nov-25-2018
                                      </span>
                                    </a>
                                  </div>
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
                                  <div className="ms-auto">
                                    <div className="rating-star block">
                                      <div
                                        className="rating-star sm my-rating-5 me-2"
                                        data-stars="4s"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $185
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/b3.png"
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
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html">
                                      Beauty &amp; Spa
                                    </a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        Gozer Beauty &amp; Spa
                                      </h4>
                                    </a>
                                    <p className="mb-0">
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <div className="item-card2-footer">
                                  <a href="#" className="location">
                                    <i className="fa fa-map-marker text-muted me-1" />
                                    Los Angles
                                  </a>
                                  <div className="rating-star d-inline-flex">
                                    <div
                                      className="rating-star sm my-rating-5 me-2"
                                      data-stars="4s"
                                    />
                                    (46 reviews)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $158
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/f4.png"
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
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html">Restaurant</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        GilkonStar Hotel
                                      </h4>
                                    </a>
                                    <p className="mb-0">
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <div className="item-card2-footer">
                                  <a href="#" className="location">
                                    <i className="fa fa-map-marker text-muted me-1" />
                                    Los Angles
                                  </a>
                                  <div className="rating-star d-inline-flex">
                                    <div
                                      className="rating-star sm my-rating-5 me-2"
                                      data-stars="4s"
                                    />
                                    (46 reviews)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-xl-4">
                            <div className="card overflow-hidden">
                              <div className="item-card2-img">
                                <div className="arrow-ribbon bg-primary">
                                  $172
                                </div>
                                <a href="classified.html" />
                                <img
                                  src="../assets/images/products/v1.png"
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
                              <div className="card-body">
                                <div className="item-card2">
                                  <div className="item-card2-desc">
                                    <a href="classified.html">Vehicles</a>
                                    <a
                                      href="classified.html"
                                      className="text-dark mt-2"
                                    >
                                      <h4 className="font-weight-semibold mt-1">
                                        Seep Automobiles
                                      </h4>
                                    </a>
                                    <p className="mb-0">
                                      Ut enim ad minima veniamq nostrum exerci
                                      ullam orisin suscipit laboriosam
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <div className="item-card2-footer">
                                  <a href="#" className="location">
                                    <i className="fa fa-map-marker text-muted me-1" />
                                    San Francisco
                                  </a>
                                  <div className="rating-star d-inline-flex">
                                    <div
                                      className="rating-star sm my-rating-5 me-2"
                                      data-stars="4s"
                                    />
                                    (46 reviews)
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
            {/*Right Side Content*/}
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control br-ts-3 br-bs-3"
                      placeholder="Search"
                    />
                    <div className>
                      <button
                        type="button"
                        className="btn btn-primary br-ts-0 br-bs-0"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Categories</h3>
                </div>
                <div className="card-body">
                  <div className id="container">
                    <div className="filter-product-checkboxs">
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Computer
                            <span className="label label-secondary float-end">
                              14
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox2"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Services
                            <span className="label label-secondary float-end">
                              22
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox3"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Jobs
                            <span className="label label-secondary float-end">
                              78
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox4"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            RealEstates
                            <span className="label label-secondary float-end">
                              35
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox5"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Clothing
                            <span className="label label-secondary float-end">
                              23
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox6"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Home &amp; Garden
                            <span className="label label-secondary float-end">
                              14
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Beauty &amp; Spa
                            <span className="label label-secondary float-end">
                              45
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Restaurant
                            <span className="label label-secondary float-end">
                              34
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Travel
                            <span className="label label-secondary float-end">
                              12
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Event
                            <span className="label label-secondary float-end">
                              18
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Health &amp; fitness
                            <span className="label label-secondary float-end">
                              02
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Electronics
                            <span className="label label-secondary float-end">
                              15
                            </span>
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-dark">
                            Mobile
                            <span className="label label-secondary float-end">
                              32
                            </span>
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-header border-top">
                  <h3 className="card-title">Price Range</h3>
                </div>
                <div className="card-body">
                  <h6>
                    <label htmlFor="price">Price Range:</label>
                    <input type="text" id="price" />
                  </h6>
                  <div id="mySlider" />
                </div>
                <div className="card-header border-top">
                  <h3 className="card-title">Condition</h3>
                </div>
                <div className="card-body">
                  <div className="filter-product-checkboxs">
                    <label className="custom-control form-checkbox mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="checkbox1"
                        defaultValue="option1"
                      />
                      <span className="custom-control-label"> New </span>
                    </label>
                    <label className="custom-control form-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="checkbox2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label"> Used </span>
                    </label>
                  </div>
                </div>
                <div className="card-header border-top">
                  <h3 className="card-title">Posted By</h3>
                </div>
                <div className="card-body">
                  <div className="filter-product-checkboxs">
                    <label className="custom-control form-checkbox mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="checkbox1"
                        defaultValue="option1"
                      />
                      <span className="custom-control-label"> Dealer </span>
                    </label>
                    <label className="custom-control form-checkbox mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="checkbox2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label"> Individual </span>
                    </label>
                    <label className="custom-control form-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="checkbox2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label"> Reseller </span>
                    </label>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-secondary btn-block">
                    Apply Filter
                  </a>
                </div>
              </div>
            </div>
            {/*/Right Side Content*/}
          </div>
        </div>
      </section>
      {/*/Add Listings*/}
    </div>
  );
};
export default BrowseCategories;
