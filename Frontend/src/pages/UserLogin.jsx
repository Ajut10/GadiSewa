import React, { useState } from "react";
import logo from "../assets/images/gadiBlack.jpg";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
  
    setEmail('');
    setPassword('');

  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img src={logo} alt="" className="w-40 mb-8" />

        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
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
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?{" "}
          <Link to="/signup" className="text-blue-400  font-medium">
            Click here
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-green-500 flex justify-center w-full text-white py-3 rounded font-semibold">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
