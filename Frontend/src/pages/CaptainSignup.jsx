import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/gadilogoblack.png";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import {toast} from "react-toastify";


const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [userData, setuserData] = useState({});

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  

  const submitHandler = async(e) => {
    e.preventDefault();
    try{
      const captainData={
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        }
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        toast.success("Captain Registered Successfully");
        navigate("/captain-login");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");
      }
      
  
    }catch(error){
      if(error.response){
        toast.error(error.response.data.error || "Captain Registration Failed");
      }
      else{
        toast.error("Something went wrong. Try again!");
      }
    }
    

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

          <h3 className="text-xl mb-3 font-medium">What's our Captain name</h3>
          <div className="flex gap-2">
            <input
              className="bg-[#eeeeee]  px-4 w-1/2 py-3 rounded placeholder:text-base text-lg mb-5"
              type="text"
              placeholder="Color Name"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]  px-4 w-1/2 py-3 rounded placeholder:text-base text-lg mb-5"
              type="text"
              placeholder="Plate Number"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <input
              className="bg-[#eeeeee]  px-4 w-1/2 py-3 rounded placeholder:text-base text-lg mb-5"
              type="Number"
              placeholder="Capacity"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          
               <select
               required
               className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
               value={vehicleType}
               onChange={(e) => {
                 setVehicleType(e.target.value)
               }}
             >
               <option value="" disabled>Select Vehicle Type</option>
               <option value="car">Car</option>
               <option value="auto">Auto</option>
               <option value="moto">Moto</option>
             </select>
          </div>

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
          This site is protected by reCAPTCHA and the Google{" "}
          <u> Privacy Policy</u> and <u>Terms of Service</u> apply.
        </small>
      </div>
    </div>
  );
};

export default CaptainSignup;
