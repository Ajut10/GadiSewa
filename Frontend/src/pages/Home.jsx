import React, { useRef, useState } from "react";
import map from "../assets/images/map.jpg";
import logo from "../assets/images/gadiUser.png";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import LocationSearchPanel from "../components/LocationSearchPanel";
import ConfirmedRide from "../components/ConfirmedRide";
import VehiclePanel from "../components/VehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const vehiclePanelref = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null)

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, { height: "70%", padding: 24 });
        gsap.to(panelCloseRef.current, { opacity: 1 });
      } else {
        gsap.to(panelRef.current, { height: "0%", padding: 0 });
        gsap.to(panelCloseRef.current, { opacity: 0 });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFoundPanel) {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFoundPanel]
  );
  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [waitingForDriver])
  return (
    <div className="relative overflow-hidden">
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
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-0 bg-white"
      >
       
      <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmedRidePanel={setConfirmedRidePanel} />
      </div>
      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-0 bg-white"
      >
        
       <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFoundPanel={setVehicleFoundPanel} />
    
      </div>
      <div
        ref={VehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-0 bg-white"
      >
       <LookingForDriver setVehicleFoundPanel={setVehicleFoundPanel} />
    
      </div>
      <div
        ref={VehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-0 bg-white"
      >
       <WaitingForDriver waitingForDriver ={waitingForDriver}/>
    
      </div>
    </div>
  );
};

export default Home;
