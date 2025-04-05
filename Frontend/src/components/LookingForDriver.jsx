import React from 'react'

const LookingForDriver= (props) => {
  return (
    <div>
    <h5
      className="text-gray-300 flex items-center justify-center text-3xl"
      onClick={() => {
        props.setConfirmedRidePanel(false);
        //   setPanelOpen(true);
      }}
    >
      <i className="ri-arrow-down-wide-fill"></i>
    </h5>
    <h2 className="font-semibold text-3xl my-2">Looking For Driver</h2>
    <div className="flex flex-col justify-between items-center">
      <img
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
        alt=""
        className="h-30"
      />

      <div className="w-full">
        <div className="flex gap-5 items-center justify-betweeen border-b-1 p-3">
          <i className="text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className="text-lg font-medium">5563/A</h3>
            <p className="text-sm text-gray-500">Location</p>
          </div>
        </div>

        <div>
          <div className="flex gap-5 items-center justify-betweeen border-b-1 p-3">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">5563/A</h3>
              <p className="text-sm text-gray-500">Location</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-betweeen  p-3">
        <i className="text-lg ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="text-lg font-medium">Rs 300</h3>
            <p className="text-sm text-gray-500 -mt-1">Cash</p>
          </div>
          </div>
      </div>
     
    </div>
  </div>
  )
}

export default LookingForDriver