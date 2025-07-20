import React from "react";
import animationData from "../Loader/LogoutButtonLotty.json";
import Lottie from "react-lottie";

const LogOutButtonLotty = () => {
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
      <div style={{ display: "inline-block" }}>
        <Lottie options={defaultOptions} height={28} width={50} />
      </div>
    </>
  );
};

export default LogOutButtonLotty;
