import React from "react";
import animationData from "../Loader/SeatLottie.json";
import Lottie from "react-lottie";

const SeatLoatty = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className='me-2' style={{ display: "inline-block" }}>
        <Lottie options={defaultOptions} height={100} width={222} />
      </div>
    </>
  );
};

export default SeatLoatty;
