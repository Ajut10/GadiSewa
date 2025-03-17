import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/gadiBlack.jpg";
import axios from "axios";
import {CaptainDataContext} from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [captainData, setCaptainData] = useState({});
  const {captain,setCaptain}= useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData={
      email: email,
      password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    if (response.status == 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    
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
          <h3 className="text-xl font-medium mb-3">What's your email</h3>
          <input
            className="bg-[#eeeeee]  px-4 w-full py-3 rounded placeholder:text-base text-lg mb-5"
            type="email"
            placeholder="example@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-xl font-medium mb-3">Enter your password</h3>
          <input
            className="bg-[#eeeeee]  px-4 w-full py-3 rounded text-lg placeholder:text-base mb-5"
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black  px-4 w-full py-3 rounded text-lg font-semibold text-white mb-5">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-400 font-medium">
            Register here
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#e15d25] text-lg flex justify-center w-full text-white py-3 rounded font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
