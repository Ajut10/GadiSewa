import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "19, Near Khari khola cafe, Kathmandu BernHardt College, Bafal",
    "39, Near Sidhi khola cafe, Kathmandu BernHardt College, Bafal",
    "49, Near Jhari khola cafe, Kathmandu BernHardt College, Bafal",
    "59, Near Bhote khola cafe, Kathmandu BernHardt College, Bafal",
  ];
  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
          key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex  gap-2 border-2 border-gray-100 p-2 rounded-xl active:border-black my-2 items-center justify-center"
          >
            <h2 className="bg-[#eee] flex items-center justify-center rounded-full w-12 h-8">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
