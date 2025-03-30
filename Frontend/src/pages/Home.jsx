import React, { useRef, useState } from "react";
import map from "../assets/images/map.jpg";
import logo from "../assets/images/gadiBlack.jpg";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import toast from "react-hot-toast";
import { toast } from "react-toastify"


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, { height: "70%" });
        gsap.to(panelCloseRef.current, { opacity: 1 });
        
      } else {
        gsap.to(panelRef.current, { height: "0%" });
        gsap.to(panelCloseRef.current, { opacity: 0 });
      }
    },
    [panelOpen]
  );
  return (
    <div className="relative">
      <img src={logo} className="w-28 absolute left-5 top-5" />
      <div className="h-screen w-screen">
        <img src={map} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-end absolute bottom-0 h-screen w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            className=" absolute top-6 right-6 text-2xl opacity-0"
            onClick={() => {
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find your trip</h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>
            <input
              type="text"
              onClick={() => setPanelOpen(!panelOpen)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="rounded-lg bg-[#eeeeee] w-full text-xl my-2 py-2 px-12 placeholder:text-base"
              placeholder="Add a pickup location"
            />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="rounded-lg bg-[#eeeeee] w-full text-xl my-2 py-2 px-12 placeholder:text-base"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-red-400"></div>
      </div>
    </div>
  );
};

export default Home;
