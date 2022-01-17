import React from "react";

export default function PostAdd() {
  return (
    <React.Fragment>
      {/*Sliders Section*/}
      <section>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1>Ad Post</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Sliders Section*/}
      {/*Add posts-section*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Add Post</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">Ad Title</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Category</label>
                    <select className="form-control form-select select2">
                      <option value={0}>Select Option</option>
                      <option value={1}>RealEstate</option>
                      <option value={2}>Restaurant</option>
                      <option value={3}>Health &amp; Fitness</option>
                      <option value={4}>Travel</option>
                      <option value={5}>Computer</option>
                      <option value={6}>Electronics</option>
                      <option value={7}>Jobs</option>
                      <option value={8}>Beauty &amp; Spa</option>
                      <option value={9}>Clothing</option>
                      <option value={10}>Home &amp; Furinture</option>
                      <option value={11}>Vechicles</option>
                      <option value={12}>Education</option>
                      <option value={13}>Services</option>
                      <option value={14}>Events</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Type of Condition
                    </label>
                    <div className="d-md-flex ad-post-details">
                      <label className="custom-control form-radio mb-2 me-4">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios2"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-muted">
                            New{" "}
                          </a>
                        </span>
                      </label>
                      <label className="custom-control form-radio mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios2"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">
                          <a href="#" className="text-muted">
                            Used
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="example-textarea-input"
                      rows={6}
                      placeholder="text here.."
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-file">
                      <input
                        type="file"
                        className="form-control example-file-input-custom"
                        name="example-file-input-custom"
                      />
                    </div>
                  </div>
                  <div className="p-2 border mb-4">
                    <div className="upload-images d-flex">
                      <div>
                        <img
                          src="../assets/images/products/h1.jpg"
                          alt="img"
                          className="w73 h73 border p-0"
                        />
                      </div>
                      <div className="ms-3 mt-2">
                        <h6 className="mb-0 mt-3 font-weight-bold">h1.jpg</h6>
                        <small>4.5kb</small>
                      </div>
                      <div className="float-end ms-auto">
                        <a
                          href="#"
                          className="float-end btn btn-icon btn-danger btn-sm mt-5"
                        >
                          <i className="fa fa-trash-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border mb-4">
                    <div className="upload-images d-flex">
                      <div>
                        <img
                          src="../assets/images/products/h5.jpg"
                          alt="img"
                          className="w73 h73 border p-0"
                        />
                      </div>
                      <div className="ms-3 mt-2">
                        <h6 className="mb-0 mt-3 font-weight-bold">h5.jpg</h6>
                        <small>4.5kb</small>
                      </div>
                      <div className="float-end ms-auto">
                        <a
                          href="#"
                          className="float-end btn btn-icon btn-danger btn-sm mt-5"
                        >
                          <i className="fa fa-trash-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-0">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-0">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-success">
                    Submit Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Terms And Conditions</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Money Not Refundable
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      You can renew your Premium ad after experted.
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Premium ads are active for depend on package.
                    </li>
                    <li className="ms-5 mb-0">
                      <a href="tips.html"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h3 className="card-title">Safety Tips For Buyers</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Meet Seller at public Place
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Check item before you buy
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Pay only after collecting item
                    </li>
                    <li className="ms-5 mb-0">
                      <a href="tips.html"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Add posts-section*/}
    </React.Fragment>
  );
}
