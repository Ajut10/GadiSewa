import React from "react";
import logo from "../assets/images/logo.png";
import gadi from "../assets/images/gadi.jpg";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div
        className="h-screen pt-8  flex justify-between flex-col w-full"
        style={{
          backgroundImage: `url(${gadi})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={logo} alt="" className="w-50 ml-5" />
        <div className="bg-white px-4 py-4">
          <h3 className="text-[30px] font-bold">
            Getting Started with GadiSewa
          </h3>
          <Link
            to="/login"
            className="flex items-center justify-center bg-black text-white py-3 w-full rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
