import React from "react";

export default function Product() {
  return (
    <div>
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
                    <div className="search-background">
                      <div className="form row g-0">
                        <div className="form-group col-xl-10 col-lg-9 col-md-12 mb-0">
                          <input
                            type="text"
                            className="form-control input-lg border-end-0"
                            id="text"
                            placeholder="Search Products"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                          <a
                            href="#"
                            style={{ backgroundColor: "#fceb42" }}
                            className="btn btn-lg btn-block br-bs-0 br-ts-0"
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
              <h4 className="page-title">Electronics</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="categories.html">Categories</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Electronics
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
              {/*Right Side Content*/}
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Posted By</h3>
                  </div>
                  <div className="card-body item-user">
                    <div className="profile-pic mb-0">
                      <img
                        src="../assets/images/faces/male/25.jpg"
                        className="brround avatar-xxl"
                        alt="user"
                      />
                      <div className>
                        <a href="userprofile.html" className="text-dark">
                          <h4 className="mt-3 mb-1 font-weight-semibold">
                            Robert McLean
                          </h4>
                        </a>
                        <span className="text-muted">
                          Member Since November 2008
                        </span>
                        <h6 className="mt-2 mb-0">
                          <a href="#" className="btn btn-primary btn-sm">
                            See All Ads
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body item-user">
                    <h4 className="mb-4">Contact Info</h4>
                    <div>
                      <h6>
                        <span className="font-weight-semibold">
                          <i className="fa fa-envelope me-3 mb-2" />
                        </span>
                        <a href="#" className="text-body">
                          {" "}
                          robert123@gmail.com
                        </a>
                      </h6>
                      <h6>
                        <span className="font-weight-semibold">
                          <i className="fa fa-phone me-3 mb-2" />
                        </span>
                        <a href="#" className="text-primary">
                          {" "}
                          0-235-657-24587
                        </a>
                      </h6>
                      <h6>
                        <span className="font-weight-semibold">
                          <i className="fa fa-link me-3" />
                        </span>
                        <a href="#" className="text-primary">
                          http://spruko.com/
                        </a>
                      </h6>
                    </div>
                    <div className="item-user-icons mt-4">
                      <a href="#" className="facebook-bg mt-0">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="twitter-bg">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="google-bg">
                        <i className="fa fa-google" />
                      </a>
                      <a href="#" className="dribbble-bg">
                        <i className="fa fa-dribbble" />
                      </a>
                    </div>
                  </div>
                  {/* <div class="card-footer">
                <div class="text-start">
                  <a href="#" class="btn btn-info"
                    ><i class="fa fa-envelope"></i> Chat</a
                  >
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#contact"
                    ><i class="fa fa-user"></i> Contact Me</a
                  >
                </div>
              </div> */}
                </div>
                {/* <div class="card">
              <div class="card-header">
                <h3 class="card-title">Keywords</h3>
              </div>
              <div class="card-body product-filter-desc">
                <div class="product-tags clearfix">
                  <ul class="list-unstyled mb-0">
                    <li><a href="#">Vehicle</a></li>
                    <li><a href="#">Model Cars</a></li>
                    <li><a href="#">Best Car</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
                {/* <div class="card">
              <div class="card-header">
                <h3 class="card-title">Shares</h3>
              </div>
              <div class="card-body product-filter-desc">
                <div class="product-filter-icons text-center">
                  <a href="#" class="facebook-bg"
                    ><i class="fa fa-facebook"></i
                  ></a>
                  <a href="#" class="twitter-bg"
                    ><i class="fa fa-twitter"></i
                  ></a>
                  <a href="#" class="google-bg"><i class="fa fa-google"></i></a>
                  <a href="#" class="dribbble-bg"
                    ><i class="fa fa-dribbble"></i
                  ></a>
                  <a href="#" class="pinterest-bg"
                    ><i class="fa fa-pinterest"></i
                  ></a>
                </div>
              </div>
            </div> */}
                {/* <div class="card">
              <div class="card-header">
                <h3 class="card-title">Map location</h3>
              </div>
              <div class="card-body">
                <div class="map-header">
                  <div class="map-header-layer" id="map2"></div>
                </div>
              </div>
            </div> */}
                {/* <div class="card">
              <div class="card-header">
                <h3 class="card-title">Search Ads</h3>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="search-text"
                    placeholder="What are you looking for?"
                  />
                </div>
                <div class="form-group">
                  <select
                    name="country"
                    id="select-countries"
                    class="form-control form-select select2-show-search"
                  >
                    <option value="1" selected>All Categories</option>
                    <option value="2">RealEstate</option>
                    <option value="3">Restaurant</option>
                    <option value="4">Beauty</option>
                    <option value="5">Jobs</option>
                    <option value="6">Services</option>
                    <option value="7">Vehicle</option>
                    <option value="8">Education</option>
                    <option value="9">Electronics</option>
                    <option value="10">Pets & Animals</option>
                    <option value="11">Computer</option>
                    <option value="12">Mobile</option>
                    <option value="13">Events</option>
                    <option value="14">Travel</option>
                    <option value="15">Clothing</option>
                  </select>
                </div>
                <div class="">
                  <a href="#" class="btn btn-primary">Search</a>
                </div>
              </div>
            </div> */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Products</h3>
                  </div>
                  <div className="card-body">
                    <ul className="vertical-scroll">
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/1.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">Best New Model Watch</h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/2.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">
                                  Trending New Model Watches
                                </h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/3.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">Best New Model Watch</h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/4.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">
                                  Trending New Model Watches
                                </h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/5.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">Best New Model Watch</h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/6.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">Best New Model Shoes</h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="news-item">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/images/products/7.png"
                                  alt="image"
                                  className="w-8 border"
                                />
                              </td>
                              <td>
                                <h5 className="mb-1">
                                  Trending New Model Shoes
                                </h5>
                                <a href="#" className="btn-link">
                                  View Details
                                </a>
                                <span className="float-end font-weight-bold">
                                  $17
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card mb-lg-0">
                  <div className="card-header">
                    <h3 className="card-title">Latest Seller Ads</h3>
                  </div>
                  <div className="card-body">
                    <div className="rated-products">
                      <ul className="vertical-scroll">
                        <li className="item">
                          <div className="media m-0 mt-0 p-5">
                            <img
                              className="me-4"
                              src="../assets/images/products/toys.png"
                              alt="img"
                            />
                            <div className="media-body">
                              <h4 className="mt-2 mb-1">Kids Toys</h4>
                              <span className="rated-products-ratings">
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                              </span>
                              <div className="h5 mb-0 font-weight-semibold mt-1">
                                $17 - $29
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="media p-5 mt-0">
                            <img
                              className="me-4"
                              src="../assets/images/products/1.png"
                              alt="img"
                            />
                            <div className="media-body">
                              <h4 className="mt-2 mb-1">Leather Watch</h4>
                              <span className="rated-products-ratings">
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star-o text-warning"> </i>
                              </span>
                              <div className="h5 mb-0 font-weight-semibold mt-1">
                                $22 - $45
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="media p-5 mt-0">
                            <img
                              className="me-4"
                              src="../assets/images/products/4.png"
                              alt="img"
                            />
                            <div className="media-body">
                              <h4 className="mt-2 mb-1">Digital Watch</h4>
                              <span className="rated-products-ratings">
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star-half-o text-warning">
                                  {" "}
                                </i>
                              </span>
                              <div className="h5 mb-0 font-weight-semibold mt-1">
                                $35 - $72
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="media p-5 mt-0">
                            <img
                              className="me-4"
                              src="../assets/images/products/6.png"
                              alt="img"
                            />
                            <div className="media-body">
                              <h4 className="mt-2 mb-1">Sports Shoe</h4>
                              <span className="rated-products-ratings">
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star-half-o text-warning">
                                  {" "}
                                </i>
                                <i className="fa fa-star-o text-warning"> </i>
                              </span>
                              <div className="h5 mb-0 font-weight-semibold mt-1">
                                $12 - $21
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="media mb-0 p-5 mt-0">
                            <img
                              className="me-4"
                              src="../assets/images/products/8.png"
                              alt="img"
                            />
                            <div className="media-body">
                              <h4 className="mt-2 mb-1">Ladies shoes</h4>
                              <span className="rated-products-ratings">
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star text-warning"> </i>
                                <i className="fa fa-star-o text-warning"> </i>
                                <i className="fa fa-star-o text-warning"> </i>
                              </span>
                              <div className="h5 mb-0 font-weight-semibold mt-1">
                                $89 - $97
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Right Side Content*/}
              <div className="col-xl-8 col-lg-8 col-md-12">
                {/*Classified Description*/}
                <div className="card overflow-hidden">
                  <div className="ribbon ribbon-top-right text-danger">
                    <span className="bg-danger">featured</span>
                  </div>
                  <div className="card-body h-100">
                    <div className="item-det mb-4">
                      <a href="#" className="text-dark">
                        <h3>Maruti Suzuki Alto</h3>
                      </a>
                      <div className="d-flex">
                        <ul className="d-flex mb-0">
                          <li className="me-5">
                            <a href="#" className="icons">
                              <i className="icon icon-briefcase text-muted me-1" />
                              Cars
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#" className="icons">
                              <i className="icon icon-location-pin text-muted me-1" />
                              USA
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#" className="icons">
                              <i className="icon icon-calendar text-muted me-1" />{" "}
                              5 hours ago
                            </a>
                          </li>
                          <li className="me-5">
                            <a href="#" className="icons">
                              <i className="icon icon-eye text-muted me-1" />{" "}
                              765
                            </a>
                          </li>
                        </ul>
                        <div className="d-inline-flex me-5">
                          <div
                            className="rating-star sm my-rating-5 me-2"
                            data-rating={4}
                          />
                          4.0
                        </div>
                        <div className="rating-star d-flex">
                          <div className="me-2">
                            <div className="rating-star sm">
                              <i className="fa fa-heart text-danger" />
                            </div>
                          </div>
                          135
                        </div>
                      </div>
                    </div>
                    <div className="product-slider carousel-slide-2">
                      <div
                        id="carouselFade"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                        data-bs-loop="false"
                        data-bs-thumb="true"
                      >
                        <div className="arrow-ribbon2 bg-primary">$539</div>
                        <div
                          className="carousel-inner slide-show-image"
                          id="full-gallery"
                        >
                          <div className="carousel-item active">
                            <img
                              src="../assets/images/products/products/v1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v2.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v3.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v4.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v2.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v3.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v4.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../assets/images/products/products/v1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="thumbcarousel">
                            <a
                              className="carousel-control-prev"
                              href="#carouselFade"
                              role="button"
                              data-bs-slide="prev"
                            >
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselFade"
                              role="button"
                              data-bs-slide="next"
                            >
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Description</h3>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atcorrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoraliz the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble thena bound to ensue; and equal blame belongs to
                        those who fail in their duty through weakness of will,
                        which is the same as saying through shrinking from toil
                        and pain.
                      </p>
                    </div>
                    <h4 className="mb-4">Specifications</h4>
                    <div className="row">
                      <div className="col-xl-12 col-md-12">
                        <div className="table-responsive">
                          <table className="table row table-borderless w-100 m-0 text-nowrap">
                            <tbody className="col-lg-12 col-xl-6 p-0">
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Fuel Type :
                                  </span>
                                  Diesel
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Breaks :
                                  </span>
                                  Front , Rear
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Seating :
                                  </span>{" "}
                                  5 members
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Colors :
                                  </span>{" "}
                                  Red , pink, Gray
                                </td>
                              </tr>
                            </tbody>
                            <tbody className="col-lg-12 col-xl-6 p-0">
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Air Bags :
                                  </span>
                                  Available
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Colors :
                                  </span>{" "}
                                  Red , pink, Gray
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Engine :
                                  </span>{" "}
                                  F8D
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="font-weight-bold">
                                    Power Windows :
                                  </span>
                                  Available
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-4 px-5 border-top border-top">
                    <div className="list-id">
                      <div className="row">
                        <div className="col">
                          <a className="mb-0">Classified ID : #8256358</a>
                        </div>
                        <div className="col col-auto">
                          Posted By
                          <a className="mb-0 font-weight-bold">Individual</a> /
                          21st Dec 2018
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="icons">
                      <a href="#" className="btn btn-info icons">
                        <i className="icon icon-share me-1" /> Share Ad
                      </a>
                      <a href="#" className="btn btn-primary icons">
                        <i className="icon icon-heart me-1" /> 678
                      </a>
                      <a href="#" className="btn btn-secondary icons">
                        <i className="icon icon-printer me-1" /> Print
                      </a>
                    </div>
                  </div>
                </div>
                {/*Classified Description*/}
                <h3 className="mb-5 mt-4">Related Posts</h3>
                {/*Related Posts*/}
                <div
                  id="myCarousel5"
                  className="owl-carousel owl-carousel-icons3"
                >
                  {/* Wrapper for carousel items */}
                  <div className="item">
                    <div className="card">
                      <div className="ribbon ribbon-top-left text-danger">
                        <span className="bg-danger">Negotiable</span>
                      </div>
                      <div className="item-card7-imgs">
                        <a href="classified.html" />
                        <img
                          src="../assets/images/products/products/ed1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="classified.html" className="text-white">
                          {" "}
                          Education
                        </a>
                        <h4 className="font-weight-semibold mb-0">$389</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Record Writing
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="ribbon ribbon-top-left text-primary">
                        <span className="bg-primary">featured</span>
                      </div>
                      <div className="item-card7-imgs">
                        <a href="classified.html" />
                        <img
                          src="../assets/images/products/products/v1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="classified.html" className="text-white">
                          {" "}
                          Cars
                        </a>
                        <h4 className="mb-0">$854</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Geep Automobiles
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/j1.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            Furniture
                          </a>
                          <h4 className="font-weight-semibold mb-0">$786</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Marketing Executive
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="ribbon ribbon-top-left text-danger">
                        <span className="bg-danger">Collection</span>
                      </div>
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/f4.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            Restaurant
                          </a>
                          <h4 className="font-weight-semibold mb-0">$539</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="rclassified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Houge Restaurant
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/pe1.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            Pets &amp; Animals
                          </a>
                          <h4 className="font-weight-semibold mb-0">$925</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Care Brohzm
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="ribbon ribbon-top-left text-success">
                        <span className="bg-success">Free Shipping</span>
                      </div>
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/h5.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            {" "}
                            Homes
                          </a>
                          <h4 className="font-weight-semibold mb-0">$925</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Single Flat House
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/ed2.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            Education
                          </a>
                          <h4 className="font-weight-semibold mb-0">$378</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">
                              Digital Marketing Training
                            </h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="ribbon ribbon-top-left text-primary">
                        <span className="bg-primary">featured</span>
                      </div>
                      <div className="item-card7-img">
                        <div className="item-card7-imgs">
                          <a href="classified.html" />
                          <img
                            src="../assets/images/products/products/j3.jpg"
                            alt="img"
                            className="cover-image"
                          />
                        </div>
                        <div className="item-card7-overlaytext">
                          <a href="classified.html" className="text-white">
                            Spa
                          </a>
                          <h4 className="font-weight-semibold mb-0">$836</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <a href="classified.html" className="text-dark">
                            <h4 className="font-weight-semibold">Designers</h4>
                          </a>
                        </div>
                        <div className="item-card7-text">
                          <ul className="icon-card mb-0">
                            <li className>
                              <a href="#" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Los Angles
                              </a>
                            </li>
                            <li>
                              <a href="#" className="icons">
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-user text-muted me-1" />
                                Sally Peake
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="#" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                5-67987608
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Related Posts*/}
                {/*Comments*/}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Rating And Reviews</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-4">
                          <p className="mb-2">
                            <span className="fs-14 ms-2">
                              <i className="fa fa-star text-yellow me-2" />5
                            </span>
                          </p>
                          <div className="progress progress-md mb-4 h-4">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "100%" }}
                            >
                              9,232
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="mb-2">
                            <span className="fs-14 ms-2">
                              <i className="fa fa-star text-yellow me-2" />4
                            </span>
                          </p>
                          <div className="progress progress-md mb-4 h-4">
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "80%" }}
                            >
                              8,125
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="mb-2">
                            <span className="fs-14 ms-2">
                              <i className="fa fa-star text-yellow me-2" /> 3
                            </span>
                          </p>
                          <div className="progress progress-md mb-4 h-4">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "60%" }}
                            >
                              6,263
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="mb-2">
                            <span className="fs-14 ms-2">
                              <i className="fa fa-star text-yellow me-2" /> 2
                            </span>
                          </p>
                          <div className="progress progress-md mb-4 h-4">
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "30%" }}
                            >
                              3,463
                            </div>
                          </div>
                        </div>
                        <div className="mb-5">
                          <p className="mb-2">
                            <span className="fs-14 ms-2">
                              <i className="fa fa-star text-yellow me-2" /> 1
                            </span>
                          </p>
                          <div className="progress progress-md mb-4 h-4">
                            <div
                              className="progress-bar bg-orange"
                              style={{ width: "20%" }}
                            >
                              1,456
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="media mt-0 p-5">
                      <div className="d-flex me-3">
                        <a href="#">
                          <img
                            className="media-object brround"
                            alt="64x64"
                            src="../assets/images/faces/male/1.jpg"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Joanne Scott
                          <span
                            className="fs-14 ms-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="verified"
                          >
                            <i className="fa fa-check-circle-o text-success" />
                          </span>
                          <span className="fs-14 ms-2">
                            4.5 <i className="fa fa-star text-yellow" />
                          </span>
                        </h5>
                        <small className="text-muted">
                          <span>
                            <i className="fa fa-calendar" /> Dec 21st
                          </span>
                          <span>
                            <i className="ms-3 fa fa-clock-o" /> 13.00{" "}
                          </span>
                          <span>
                            <i className="ms-3 fa fa-map-marker" /> Brezil
                          </span>
                        </small>
                        <p className="font-13 mb-2 mt-2">
                          Ut enim ad minim veniam, quis Neque porro quisquam
                          est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, sed quia non numquam eius
                          modi tempora incidunt ut labore et nostrud
                          exercitation ullamco laboris commodo consequat.
                        </p>
                        <a href="#" className="me-2">
                          <span className="badge badge-primary">Helpful</span>
                        </a>
                        <a
                          href
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#Comment"
                        >
                          <span className>Comment</span>
                        </a>
                        <a
                          href
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#report"
                        >
                          <span className>Report</span>
                        </a>
                        <div className="media mt-5">
                          <div className="d-flex me-3">
                            <a href="#">
                              <img
                                className="media-object brround"
                                alt="64x64"
                                src="../assets/images/faces/female/2.jpg"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h5 className="mt-0 mb-1 font-weight-semibold">
                              Rose Slater
                              <span
                                className="fs-14 ms-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="verified"
                              >
                                <i className="fa fa-check-circle-o text-success" />
                              </span>
                            </h5>
                            <small className="text-muted">
                              <span>
                                <i className="fa fa-calendar" /> Dec 22nd{" "}
                              </span>
                              <span>
                                <i className="ms-3 fa fa-clock-o" /> 6.00{" "}
                              </span>
                              <span>
                                <i className="ms-3 fa fa-map-marker" /> Brezil
                              </span>
                            </small>
                            <p className="font-13 mb-2 mt-2">
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris commodo Ut enim ad minima veniam,
                              quis nostrum exercitationem ullam corporis
                              suscipit laboriosam, nisi ut aliquid ex ea commodi
                              consequatur consequat.
                            </p>
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#Comment"
                            >
                              <span className="badge badge-default">
                                Comment
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media p-5 border-top mt-0">
                      <div className="d-flex me-3">
                        <a href="#">
                          <img
                            className="media-object brround"
                            alt="64x64"
                            src="../assets/images/faces/male/3.jpg"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Edward
                          <span
                            className="fs-14 ms-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="verified"
                          >
                            <i className="fa fa-check-circle-o text-success" />
                          </span>
                          <span className="fs-14 ms-2">
                            4 <i className="fa fa-star text-yellow" />
                          </span>
                        </h5>
                        <small className="text-muted">
                          <span>
                            <i className="fa fa-calendar" /> Dec 21st
                          </span>
                          <span>
                            <i className="ms-3 fa fa-clock-o" /> 16.35
                          </span>
                          <span>
                            <i className="ms-3 fa fa-map-marker" /> UK
                          </span>
                        </small>
                        <p className="font-13 mb-2 mt-2">
                          Ut enim ad minim veniam, quis Neque porro quisquam
                          est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, sed quia non numquam eius
                          modi tempora incidunt ut labore et nostrud
                          exercitation ullamco laboris commodo consequat.
                        </p>
                        <a href="#" className="me-2">
                          <span className="badge badge-primary">Helpful</span>
                        </a>
                        <a
                          href
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#Comment"
                        >
                          <span className>Comment</span>
                        </a>
                        <a
                          href
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#report"
                        >
                          <span className>Report</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Comments*/}
                <div className="card mb-0">
                  <div className="card-header">
                    <h3 className="card-title">Leave a reply</h3>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name1"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="example-textarea-input"
                          rows={6}
                          placeholder="Comment"
                          defaultValue={""}
                        />
                      </div>
                      <a href="#" className="btn btn-primary">
                        Send Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter*/}
        <section className="sptb bg-white border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xl-6 col-md-12">
                <div className="sub-newsletter">
                  <h3 className="mb-2">
                    <i className="fa fa-paper-plane-o me-2" /> Subscribe To Our
                    Newsletter
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-6 col-md-12">
                <div className="input-group sub-input mt-1">
                  <input
                    type="text"
                    className="form-control input-lg"
                    placeholder="Enter your Email"
                  />
                  <div className>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg br-ts-0 br-bs-0"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/Newsletter*/}
      </div>
    </div>
  );
}
