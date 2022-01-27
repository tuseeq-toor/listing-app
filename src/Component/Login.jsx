import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { callApi } from "../Utitlies/callAPI";
import withRouter from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./Action/Action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.saveModal = {
      email: "",
      password: "",
    };
    this.state = {
      saveModal: this.saveModal,
    };
  }
  handleField = (e) => {
    const { value, name } = e.target;
    this.setState({
      saveModal: {
        ...this.state.saveModal,
        [name]: value,
      },
    });
  };
  handleLogin = async (e) => {
    e.preventDefault();
    const { saveModal } = this.state;
    const data = await callApi("/login", "post", saveModal);
    const userData = await callApi("/userinfo", "get",null,data.id,data.token);
    if(data && userData){
      this.props.close(e)
    }
    this.props.logIn(data.token)
    this.props.userInfo(userData)
   
  };
  render() {
    const { saveModal } = this.state;
    const { open, close} = this.props;
    console.log("loginToken",this.props.loginToken)
    return (
      <Modal isOpen={open} size="lg">
        <ModalHeader toggle={close}>Login</ModalHeader>
        <ModalBody>
          <div className="single-page customerpage ">
            <div className="wrapper wrapper2 box-shadow-0">
              <form id="login" className="card-body" tabIndex={500}>
                <div className="mail">
                  <input
                    type="email"
                    name="email"
                    value={saveModal.email}
                    onChange={this.handleField}
                  />
                  <label>Mail or Username</label>
                </div>
                <div className="passwd">
                  <input
                    type="password"
                    name="password"
                    value={saveModal.password}
                    onChange={this.handleField}
                  />
                  <label>Password</label>
                </div>
                <div className="submit">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="mb-2">
                  <a href="forgot.html">Forgot Password</a>
                </p>
                <p className="text-dark mb-0">
                  Don't have account?
                  <a href="register.html" className="text-primary ms-1">
                    Sign Up
                  </a>
                </p>
              </form>
              <hr className="divider" />
              <div className="card-body">
                <div className="text-center">
                  <div className="btn-group">
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-icon me-2 brround"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn  me-2 btn-icon brround"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a
                      href="https://twitter.com/"
                      className="btn  btn-icon brround"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
