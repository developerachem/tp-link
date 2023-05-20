import React from "react";
import bannerImage from "../../images/pbanner.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImage} className="w-full" alt="" />
      <button
        className="uppercase py-2 text-white text-xl absolute px-5 rounded"
        style={{
          backgroundColor: "#03398f",
          bottom: "50px",
          left: "45%",
        }}
      >
        Click here to register
      </button>
    </div>
  );
};

export default Banner;
