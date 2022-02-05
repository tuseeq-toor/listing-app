import React, { Component } from "react";
import { callApi } from "../Utitlies/callAPI";
import { mapStateToProps, mapDispatchToProps } from "./Action/Action";
import { connect } from "react-redux";
import Swal from "sweetalert2";
class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.saveModal = {
      sellerid: this.props.userInfoData._id,
      sellername: this.props.userInfoData.name,
      title: (this.props.editData || {}).title || "",
      category: (this.props.editData || {}).category || "",
      price: (this.props.editData || {}).price || "",
      tag: (this.props.editData || {}).tag || "",
      mainimg: (this.props.editData || {}).mainimg || "",
      address: (this.props.editData || {}).address || "",
      location: (this.props.editData || {}).location || "",
      phonenumber: (this.props.editData || {}).phonenumber || "",
      description: (this.props.editData || {}).description || "",
    };

    this.state = {
      categoryList: [],
      locationList: [],
      saveModal: this.saveModal,
    };
  }
  getCategory = async () => {
    const categoryData = await callApi("/category", "get");
    this.setState({
      categoryList: categoryData,
    });
  };
  getLocation = async () => {
    const location = {
      AD: "Andorra",
      AE: "United Arab Emirates",
      AF: "Afghanistan",
      AG: "Antigua and Barbuda",
      AI: "Anguilla",
      AL: "Albania",
      AM: "Armenia",
      AN: "Netherlands Antilles",
      AO: "Angola",
      AQ: "Antarctica",
      AR: "Argentina",
      AS: "American Samoa",
      AT: "Austria",
      AU: "Australia",
      AW: "Aruba",
      AX: "Aland Islands",
      AZ: "Azerbaijan",
      BA: "Bosnia and Herzegovina",
      BB: "Barbados",
      BD: "Bangladesh",
      BE: "Belgium",
      BF: "Burkina Faso",
      BG: "Bulgaria",
      BH: "Bahrain",
      BI: "Burundi",
      BJ: "Benin",
      BL: "Saint Barthelemy",
      BM: "Bermuda",
      BN: "Brunei",
      BO: "Bolivia",
      BQ: "Bonaire, Saint Eustatius and Saba ",
      BR: "Brazil",
      BS: "Bahamas",
      BT: "Bhutan",
      BV: "Bouvet Island",
      BW: "Botswana",
      BY: "Belarus",
      BZ: "Belize",
      CA: "Canada",
      CC: "Cocos Islands",
      CD: "Democratic Republic of the Congo",
      CF: "Central African Republic",
      CG: "Republic of the Congo",
      CH: "Switzerland",
      CI: "Ivory Coast",
      CK: "Cook Islands",
      CL: "Chile",
      CM: "Cameroon",
      CN: "China",
      CO: "Colombia",
      CR: "Costa Rica",
      CS: "Serbia and Montenegro",
      CU: "Cuba",
      CV: "Cape Verde",
      CW: "Curacao",
      CX: "Christmas Island",
      CY: "Cyprus",
      CZ: "Czechia",
      DE: "Germany",
      DJ: "Djibouti",
      DK: "Denmark",
      DM: "Dominica",
      DO: "Dominican Republic",
      DZ: "Algeria",
      EC: "Ecuador",
      EE: "Estonia",
      EG: "Egypt",
      EH: "Western Sahara",
      ER: "Eritrea",
      ES: "Spain",
      ET: "Ethiopia",
      FI: "Finland",
      FJ: "Fiji",
      FK: "Falkland Islands",
      FM: "Micronesia",
      FO: "Faroe Islands",
      FR: "France",
      GA: "Gabon",
      GB: "United Kingdom",
      GD: "Grenada",
      GE: "Georgia",
      GF: "French Guiana",
      GG: "Guernsey",
      GH: "Ghana",
      GI: "Gibraltar",
      GL: "Greenland",
      GM: "Gambia",
      GN: "Guinea",
      GP: "Guadeloupe",
      GQ: "Equatorial Guinea",
      GR: "Greece",
      GS: "South Georgia and the South Sandwich Islands",
      GT: "Guatemala",
      GU: "Guam",
      GW: "Guinea-Bissau",
      GY: "Guyana",
      HK: "Hong Kong",
      HM: "Heard Island and McDonald Islands",
      HN: "Honduras",
      HR: "Croatia",
      HT: "Haiti",
      HU: "Hungary",
      ID: "Indonesia",
      IE: "Ireland",
      IL: "Israel",
      IM: "Isle of Man",
      IN: "India",
      IO: "British Indian Ocean Territory",
      IQ: "Iraq",
      IR: "Iran",
      IS: "Iceland",
      IT: "Italy",
      JE: "Jersey",
      JM: "Jamaica",
      JO: "Jordan",
      JP: "Japan",
      KE: "Kenya",
      KG: "Kyrgyzstan",
      KH: "Cambodia",
      KI: "Kiribati",
      KM: "Comoros",
      KN: "Saint Kitts and Nevis",
      KP: "North Korea",
      KR: "South Korea",
      KW: "Kuwait",
      KY: "Cayman Islands",
      KZ: "Kazakhstan",
      LA: "Laos",
      LB: "Lebanon",
      LC: "Saint Lucia",
      LI: "Liechtenstein",
      LK: "Sri Lanka",
      LR: "Liberia",
      LS: "Lesotho",
      LT: "Lithuania",
      LU: "Luxembourg",
      LV: "Latvia",
      LY: "Libya",
      MA: "Morocco",
      MC: "Monaco",
      MD: "Moldova",
      ME: "Montenegro",
      MF: "Saint Martin",
      MG: "Madagascar",
      MH: "Marshall Islands",
      MK: "Macedonia",
      ML: "Mali",
      MM: "Myanmar",
      MN: "Mongolia",
      MO: "Macao",
      MP: "Northern Mariana Islands",
      MQ: "Martinique",
      MR: "Mauritania",
      MS: "Montserrat",
      MT: "Malta",
      MU: "Mauritius",
      MV: "Maldives",
      MW: "Malawi",
      MX: "Mexico",
      MY: "Malaysia",
      MZ: "Mozambique",
      NA: "Namibia",
      NC: "New Caledonia",
      NE: "Niger",
      NF: "Norfolk Island",
      NG: "Nigeria",
      NI: "Nicaragua",
      NL: "Netherlands",
      NO: "Norway",
      NP: "Nepal",
      NR: "Nauru",
      NU: "Niue",
      NZ: "New Zealand",
      OM: "Oman",
      PA: "Panama",
      PE: "Peru",
      PF: "French Polynesia",
      PG: "Papua New Guinea",
      PH: "Philippines",
      PK: "Pakistan",
      PL: "Poland",
      PM: "Saint Pierre and Miquelon",
      PN: "Pitcairn",
      PR: "Puerto Rico",
      PS: "Palestinian Territory",
      PT: "Portugal",
      PW: "Palau",
      PY: "Paraguay",
      QA: "Qatar",
      RE: "Reunion",
      RO: "Romania",
      RS: "Serbia",
      RU: "Russia",
      RW: "Rwanda",
      SA: "Saudi Arabia",
      SB: "Solomon Islands",
      SC: "Seychelles",
      SD: "Sudan",
      SE: "Sweden",
      SG: "Singapore",
      SH: "Saint Helena",
      SI: "Slovenia",
      SJ: "Svalbard and Jan Mayen",
      SK: "Slovakia",
      SL: "Sierra Leone",
      SM: "San Marino",
      SN: "Senegal",
      SO: "Somalia",
      SR: "Suriname",
      SS: "South Sudan",
      ST: "Sao Tome and Principe",
      SV: "El Salvador",
      SX: "Sint Maarten",
      SY: "Syria",
      SZ: "Swaziland",
      TC: "Turks and Caicos Islands",
      TD: "Chad",
      TF: "French Southern Territories",
      TG: "Togo",
      TH: "Thailand",
      TJ: "Tajikistan",
      TK: "Tokelau",
      TL: "Timor Leste",
      TM: "Turkmenistan",
      TN: "Tunisia",
      TO: "Tonga",
      TR: "Turkey",
      TT: "Trinidad and Tobago",
      TV: "Tuvalu",
      TW: "Taiwan",
      TZ: "Tanzania",
      UA: "Ukraine",
      UG: "Uganda",
      UM: "United States Minor Outlying Islands",
      US: "United States",
      UY: "Uruguay",
      UZ: "Uzbekistan",
      VA: "Vatican",
      VC: "Saint Vincent and the Grenadines",
      VE: "Venezuela",
      VG: "British Virgin Islands",
      VI: "U.S. Virgin Islands",
      VN: "Vietnam",
      VU: "Vanuatu",
      WF: "Wallis and Futuna",
      WS: "Samoa",
      XK: "Kosovo",
      YE: "Yemen",
      YT: "Mayotte",
      ZA: "South Africa",
      ZM: "Zambia",
      ZW: "Zimbabwe",
    };
    const locationArr = Object.values(location);
    this.setState({
      locationList: locationArr,
    });
  };
  handleField = (e) => {
    const { name, value } = e.target;
    this.setState({
      saveModal: {
        ...this.state.saveModal,
        [name]: value,
      },
    });
  };
  handlePostAdd = async () => {
    const { saveModal } = this.state;
    const postData = await callApi("/ad", "post", saveModal);
    if (postData.msg === "Ad is posted") {
      Swal.fire("Add Posted Successfully", "", "success");
    }
  };
  componentDidMount() {
    this.getCategory();
    this.getLocation();
  }
  render() {
    const { categoryList, saveModal, locationList } = this.state;
    const { editData, handleCloseEditAdd, handleUpdatePost } = this.props;
    console.log("editData", editData);
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
                  <h1>{editData ? "Edit Post" : "Ad Post"}</h1>
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
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={saveModal.title}
                        onChange={this.handleField}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label text-dark">Category</label>
                      <select
                        className="form-control form-select select2"
                        name="category"
                        value={saveModal.category}
                        onChange={this.handleField}
                      >
                        <option value={0}>Select Option</option>
                        {categoryList.map((items) => {
                          return (
                            <option value={items.id} key={items.id}>
                              {items.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label text-dark">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="$"
                        value={saveModal.price}
                        onChange={this.handleField}
                      />
                    </div>
                    {/* <div className="form-group">
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
                    </div> */}
                    <div className="form-group">
                      <label className="form-label text-dark">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        name="example-textarea-input"
                        rows={6}
                        defaultValue={""}
                        name="description"
                        value={saveModal.description}
                        onChange={this.handleField}
                      />
                    </div>
                    {/* <div className="form-group">
                      <div className="form-file">
                        <input
                          type="file"
                          className="form-control example-file-input-custom"
                          name="example-file-input-custom"
                        />
                      </div>
                    </div> */}
                    {/* <div className="p-2 border mb-4">
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
                    </div> */}
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                          <label className="form-label">Location</label>
                          <select
                            className="form-control form-select select2"
                            name="location"
                            value={saveModal.location}
                            onChange={this.handleField}
                          >
                            <option value={0}>Select Location</option>
                            {locationList.map((items, i) => {
                              return (
                                <option value={items} key={i}>
                                  {items}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                          <label className="form-label">Tag</label>
                          <input
                            type="email"
                            className="form-control"
                            name="tag"
                            value={saveModal.tag}
                            onChange={this.handleField}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            name="phonenumber"
                            value={saveModal.phonenumber}
                            onChange={this.handleField}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group mb-0">
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={saveModal.address}
                            onChange={this.handleField}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    {editData ? (
                      <>
                        <button
                          className="btn btn-success"
                          onClick={() => handleUpdatePost(saveModal)}
                        >
                          Update Post
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={handleCloseEditAdd}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={this.handlePostAdd}
                      >
                        Submit Now
                      </button>
                    )}
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
                        <a
                          href="tips.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {" "}
                          View more..
                        </a>
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
                        <a
                          href="tips.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {" "}
                          View more..
                        </a>
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
}
export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);
