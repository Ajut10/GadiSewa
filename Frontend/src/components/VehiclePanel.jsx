import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="text-gray-300 flex items-center justify-center text-3xl"
        onClick={() => {
          props.setVehiclePanel(false);
          //   setPanelOpen(true);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h2 className="font-semibold text-3xl my-2">Choose a vehicle</h2>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.selectVehicle("car");
        }}
        className="flex w-full px-3 py-2 my-2 border-2 border-black rounded-2xl items-center justify-between"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
          className="h-15"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-sm">
            Gadi Haru
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h2 className="font-medium text-sm">2 mins away</h2>
          <p className="font-normal text-xs">Affordable rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.selectVehicle("moto");
        }}
        className="flex w-full px-3 py-2  my-2 border-2 border-black rounded-2xl items-center justify-between"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
          className="h-15"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-sm">
            Gadi Haru
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h2 className="font-medium text-sm">2 mins away</h2>
          <p className="font-normal text-xs">Affordable rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
