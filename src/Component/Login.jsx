import React, { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Login(props) {
  const { open, close } = props;
  return (
    <Modal isOpen={open} size="lg">
      <ModalHeader toggle={close}>Login</ModalHeader>
      <ModalBody>
        <div className="single-page customerpage ">
          <div className="wrapper wrapper2 box-shadow-0">
            <form id="login" className="card-body" tabIndex={500}>
              <div className="mail">
                <input type="email" name="mail" />
                <label>Mail or Username</label>
              </div>
              <div className="passwd">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div className="submit">
                <a className="btn btn-primary btn-block" href="index.html">
                  Login
                </a>
              </div>
              <p className="mb-2">
                <a href="forgot.html">Forgot Password</a>
              </p>
              <p className="text-dark mb-0">
                Don't have account?
                <a href="register.html" className="text-primary ms-1">
                  Sign UP
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
