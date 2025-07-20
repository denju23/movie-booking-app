import React from "react";
import animationData from "../Loader/ScroolLotty.json";
import Lottie from "react-lottie";

const ScroolLotty = () => {
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
      <div className="me-2" style={{ display: "inline-block" }}>
        <Lottie options={defaultOptions} height={20} width={20} />
      </div>
    </>
  );
};

export default ScroolLotty;
