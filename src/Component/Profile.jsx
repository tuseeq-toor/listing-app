import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { callApi } from "../Utitlies/callAPI";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import UpdatePassword from "./UpdatePassword";

export default function Profile() {
  //User current data
  const userData = useSelector((state) => state.userInfo.payload);
  const dispatch = useDispatch();
  // saveModal
  const [saveModal, setSaveModal] = useState({
    name: userData.name || "",
    email: userData.email || "",
    password: userData.password || "",
    phonenumber: userData.phonenumber || "",
    aboutme: userData.aboutme || "",
    address: userData.address || "",
    location: userData.location || "",
    role: userData.role || "",
  });
  const [passwordPopup, setPasswordPopup] = useState(false);
  // Input handle Field
  const handleInputField = (e) => {
    const { value, name } = e.target;
    setSaveModal({
      ...saveModal,
      [name]: value,
    });
  };

  // handle update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const response = await callApi(`/updateprofile`, "patch", saveModal);
    if (response.msg === "Profile Updated") {
      Swal.fire("Profile Updated", "", "success");
      debugger;
      dispatch({
        type: "UserInfo",
        data: saveModal,
      });
    }
  };

  //   Update password popup
  const handleUpdatePassword = () => {
    setPasswordPopup(!passwordPopup);
  };
  return (
    <div>
      {passwordPopup ? (
        <UpdatePassword open={passwordPopup} close={handleUpdatePassword} />
      ) : null}

      {/*Breadcrumb*/}
      <section>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>My Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Breadcrumb*/}
      {/*User Dashboard*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card mb-0">
                <div className="card-header row">
                  <div className="col-lg-6">
                    <h3 className="card-title">Edit Profile</h3>
                  </div>
                  <div className="col-lg-6" style={{ textAlign: "right" }}>
                    <a
                      href="#"
                      className="card-title"
                      style={{ fontSize: "15px" }}
                      onClick={handleUpdatePassword}
                    >
                      Change Password
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="name"
                          value={saveModal.name}
                          onChange={handleInputField}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={saveModal.email}
                          onChange={handleInputField}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                          name="phonenumber"
                          value={saveModal.phonenumber}
                          onChange={handleInputField}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select
                          className="form-control "
                          data-placeholder="Select"
                          name="location"
                          value={saveModal.location}
                          onChange={handleInputField}
                        >
                          <option>--Select--</option>
                          <option value={1}>Germany</option>
                          <option value={2}>Real Estate</option>
                          <option value={3}>Canada</option>
                          <option value={4}>Usa</option>
                          <option value={5}>Afghanistan</option>
                          <option value={6}>Albania</option>
                          <option value={7}>China</option>
                          <option value={8}>Denmark</option>
                          <option value={9}>Finland</option>
                          <option value={10}>India</option>
                          <option value={11}>Kiribati</option>
                          <option value={12}>Kuwait</option>
                          <option value={13}>Mexico</option>
                          <option value={14}>Pakistan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Home Address"
                          name="address"
                          value={saveModal.address}
                          onChange={handleInputField}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">About Me</label>
                        <textarea
                          rows={5}
                          className="form-control"
                          placeholder="Enter About your description"
                          defaultValue={""}
                          name="aboutme"
                          value={saveModal.aboutme}
                          onChange={handleInputField}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdateProfile}
                  >
                    Updated Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/User Dashboard*/}
    </div>
  );
}
