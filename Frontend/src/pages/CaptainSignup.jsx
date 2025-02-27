import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/gadiBlack.jpg";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setuserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img src={logo} alt="" className="w-40 mb-8" />

        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-3 font-medium">What's our Captain name</h3>
          <div className="flex gap-2">
            <input
              className="bg-[#eeeeee]  px-4 w-1/2 py-3 rounded placeholder:text-base text-lg mb-5"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]  px-4 w-1/2 py-3 rounded placeholder:text-base text-lg mb-5"
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-xl font-medium mb-3">What's your email</h3>
          <input
            className="bg-[#eeeeee]  px-4 w-full py-3 rounded placeholder:text-base text-lg mb-5"
            type="email"
            placeholder="example@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-xl font-medium mb-3">Enter your password</h3>
          <input
            className="bg-[#eeeeee]  px-4 w-full py-3 rounded text-lg placeholder:text-base mb-5"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black  px-4 w-full py-3 rounded text-lg font-semibold text-white mb-5">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already Have a account?{" "}
          <Link to="/login " className="text-blue-400 font-medium">
            Click here
          </Link>
        </p>
      </div>
      <div>
        <small className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the Google <u> Privacy Policy</u> and <u>Terms of
          Service</u> apply. 
        </small>
      </div>
    </div>
  );
};

export default CaptainSignup;
