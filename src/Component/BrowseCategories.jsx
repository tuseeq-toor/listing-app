import React, { useEffect, useState } from "react";
import { ExternalJsCall } from "../Utitlies/LoadExternalJs";
import { Link } from "react-router-dom";
import Product from "./Product";
import { callApi } from "../Utitlies/callAPI";
import ProductCard from "./ProductCard";

const BrowseCategories = () => {
  useEffect(() => {
    ExternalJsCall();
    getNonpremiumadd();
    getCategory();
    getLocation();
  }, []);
  const [searchModal, setSearchModal] = useState({ cat: "", loc: "" });
  const [allAdds, setAllAdds] = useState([]);
  const [allAddsFilter, setAllAddsFilter] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [seletedAdd, setSeletedAdd] = useState({});
  const handlePageKey = (e, key,items) => {
    setSeletedAdd(items);
    e.preventDefault();
    setCurrentPageKey(key);
  };
  const getNonpremiumadd = async () => {
    const adds = await callApi("/ad/getnonpremium");
    setAllAdds(adds);
    setAllAddsFilter(adds);
  };

  const getCategory = async () => {
    const categoryData = await callApi("/category", "get");
    setCategoryList(categoryData);
  };
  const getLocation = () => {
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
    setLocationList(locationArr);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSearchModal({
      ...searchModal,
      [name]: value,
    });
  };
  useEffect(() => {
    hanldeSearch();
  }, [searchModal]);

  const hanldeSearch = () => {
    let allAddsforFilter = [...allAdds];
    const { cat, loc } = searchModal;
    let filterAdds = allAddsforFilter;
    if (cat && loc) {
      filterAdds = allAddsforFilter.filter(
        (items) => items.category === cat && items.location === loc
      );
    } else {
      if (cat) {
        filterAdds = allAddsforFilter.filter((items) => items.category === cat);
      }
      if (loc) {
        filterAdds = allAddsforFilter.filter((items) => items.category === loc);
      }
    }
    setAllAddsFilter(filterAdds);
  };

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
                        <span className="font-weight-bold">
                          {(allAdds || []).length}
                        </span>{" "}
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
                            onClick={(e) => {
                              e.preventDefault();
                            }}
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
                                Showing 1 to {(allAddsFilter || []).length} of{" "}
                                {(allAdds || []).length} entries
                              </h6>
                            </div>
                            <div className="col-lg-5 col-md-12 d-flex">
                              <select
                                className="form-control"
                                name="cat"
                                value={searchModal.cat}
                                onChange={handleInput}
                              >
                                <option value={0}>Select Category</option>
                                {categoryList.map((items) => {
                                  return (
                                    <option value={items.name} key={items.id}>
                                      {items.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-12 d-flex">
                              <select
                                className="form-control"
                                name="loc"
                                value={searchModal.loc}
                                onChange={handleInput}
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
                            {/* <div className="col-lg-2 col-md-12">
                              <select className="form-control form-control-sm">
                                <option value="volvo">Sort by</option>
                                <option value="saab">Date</option>
                                <option value="mercedes">Price</option>
                              </select>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab-12">
                          <div className="row">
                            {(allAddsFilter || []).map((items) => {
                              return (
                               <ProductCard items={items} handlePageKey={handlePageKey}/>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="center-block text-center">
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
                    </div> */}
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
  const product = <Product seletedAdd={seletedAdd} allAdds={allAdds}/>;
  if (CurrentPageKey === 100) {
    return <React.Fragment>{browseCategory}</React.Fragment>;
  } else if (CurrentPageKey === 101) {
    return <React.Fragment>{product}</React.Fragment>;
  }
};
export default BrowseCategories;
