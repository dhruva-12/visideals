import React, { Component } from "react";

//import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { BrowserRouter as Link } from "react-router-dom";
import ReactTelInput from "react-telephone-input";
import "./Admin.css";



//var ReactTelInput = require('react-telephone-input');
function handleInputChange(telNumber, selectedCountry) {
  console.log(
    "input changed. number: ",
    telNumber,
    "selected country: ",
    selectedCountry
  );
}
function handleInputBlur(telNumber, selectedCountry) {
  console.log(
    "Focus off the ReactTelephoneInput component. Tel number entered is: ",
    telNumber,
    " selected country is: ",
    selectedCountry
  );
}
export default class Admin extends Component {
  
  render() {
    return (
      <div className="d-md-flex h-md-100 align-items-left">
        <div className="col-md-6 p-0 bg-white h-md-100  ">
          <div className="d-md-flex align-items-left h-100 p-5 text-left justify-content-left">
            <form>
              <div>
                <img
                  src="https://www.visitorsdeals.com/static/media/logo-full.a4ea859c.png"
                  className="img-fluid mt-1 mb-1 w-25"
                  alt="Logo"
                />
                 <br></br>
                <br></br>
                <br></br>

                <h1 className="mb-4 text-pink mx-5">Log In</h1>
              </div>

              <br></br>
              <br></br>

              <div className=" mx-4 my-4 form-group">
                <label className="text-pink">Email Id:</label>
                <input type="email" id="name1" className="form-control" />
              </div>

              <div className="mx-4 my-4 form-group">
                <label className="text-pink">Password:</label>
                <input type="password" id="name1" className="form-control " />
                <small className="form-text text-muted-white">
                  Your password must be 8-20 characters long, contain letters,
                  numbers and special characters, but must not contain spaces.
                </small>
              </div>
              <br></br>
              <br></br>
              <button type="button" className="btn bg-pink float-right cus1">
                LOG IN
              </button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <button className="loginBtn loginBtn--facebook">
                Login with Facebook
              </button>

              <button className="loginBtn loginBtn--google">
                Login with Google
              </button>
            </form>
          </div>
        </div>
        <div className="or">OR</div>

        <div className="col-md-6 p-0 bg-pink h-md-100 loginarea">
          <div className="d-md-flex align-items-left h-md-100 p-5 justify-content">
            <form>
              <h1 className="mb-4 mx-4 p-5 text-white">Sign Up</h1>

              <div className="mx-4 my-4 form-group">
                <label className="text-white">Name:</label>
                <input type="name" id="name" className="form-control" />
              </div>

              <div className=" mx-4 my-4 form-group">
                <label className="text-white">Email Id:</label>
                <input type="email" id="name" className="form-control" />
              </div>

              <div className="mx-4 my-4 form-group">
                <label className="text-white">Phone Number:</label>
              </div>

              <ReactTelInput
                defaultCountry="in"
                flagsImagePath="flags"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />

              <div className="mx-4 my-4 form-group">
                <label className="text-white">Password:</label>
                <input type="password" id="name" className="form-control " />
                <small className="form-text text-muted-white">
                  Your password must be 8-20 characters long, contain letters,
                  numbers and special characters, but must not contain spaces.
                </small>
              </div>

              <button type="button" className="btn bg-white float-right cus">
                SIGN  UP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
