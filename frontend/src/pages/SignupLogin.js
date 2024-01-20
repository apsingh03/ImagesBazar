import React, { useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { SignUpAsync } from "../redux/Slices/SignUpSlice";
import { SignInAsync } from "../redux/Slices/SignInSlice";

const SignupLogin = () => {

    const signupDataFromRedux = useSelector( (state) => state.signup );

    // console.log("signupDataFromRedux - " + signupDataFromRedux);
// 
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const onSignupHandler = (e) => {
    e.preventDefault();

      dispatch( SignUpAsync({
        email: email,
        password: password,
      }) )

    // console.log("sadfkasdjfkjadskfhask")
    // console.log(email)
    // console.log(password)
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

      dispatch( SignInAsync({
        email: loginEmail,
        password: loginPassword,
      }) )

    // console.log("sadfkasdjfkjadskfhask")
    // console.log(email)
    // console.log(password)
  };

  return (
    <>
      <section id="mainPage" className="d-flex flex-column justify-content-center " style={{ height: "120vh" }}>

        <div className="row  ">

          <div className="col-12 col-md-6 mb-5">
            <div>
              <h2 className="text-center text-white">Sign Up</h2>
              <form onSubmit={onSignupHandler}>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    onChange={(e) => setemail(e.target.value)}
                    id="signupEmail"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signUpPassword" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    id="signUpPassword"
                    placeholder="Your Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div className="text-center" >
                <input
                  type="submit"
                  className="btn btn-primary btn-lg"
                  value="SignUp"
                />
                </div>

                
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div>
              <h2 className="text-center text-white">Login </h2>
              <form onSubmit={onLoginHandler}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    onChange={(e) => setloginEmail(e.target.value)}
                    id="loginEmail"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    id="loginPassword"
                    placeholder="Your Password"
                    onChange={(e) => setloginPassword(e.target.value)}
                  />
                </div>

                <div className="text-center" >

                <input
                  type="submit"
                  className="btn btn-primary btn-lg"
                  value="Log In"
                />

                </div>
            
              </form>

              <div  className="text-white mt-3">
                <p>Email - <b>user2@gmail.com , singh@gmail.com </b>   </p>
                <p>Password - <b>user2 , singh</b> </p>

              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default SignupLogin;
