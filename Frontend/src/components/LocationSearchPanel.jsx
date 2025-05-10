import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    const location = suggestion.description;

    if (activeField === "pickup") {
      setPickup(location);
    } else if (activeField === "destination") {
      setDestination(location);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };
  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] flex items-center justify-center rounded-full w-12 h-8">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem.description} </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
