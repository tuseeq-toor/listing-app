import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Register(props) {
  const { open, close } = props;
  return (
    <Modal isOpen={open} size="lg">
      <ModalHeader toggle={close}>Register</ModalHeader>
      <ModalBody>
        <div className="single-page customerpage ">
          <div className="wrapper wrapper2 box-shadow-0">
            <form id="login" className="card-body" tabIndex={500}>
              <div className="mail">
                <input type="text" name="fullName" />
                <label>Full Name</label>
              </div>
              <div className="mail">
                <input type="text" name="fullName" />
                <label>Address</label>
              </div>
              <div className="mail">
                <input type="number" name="phoneNumber" />
                <label>Phone Number</label>
              </div>
              <div className="passwd">
                <input type="email" name="email" />
                <label>Email</label>
              </div>
              <div className="passwd">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div className="submit">
                <a className="btn btn-primary btn-block" href="index.html">
                  Register
                </a>
              </div>
            
            
            </form>
         
          
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
