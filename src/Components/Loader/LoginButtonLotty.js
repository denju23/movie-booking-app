import React from "react";
import animationData from "../Loader/LoginButtonLotty.json";
import Lottie from "react-lottie";

const LoginButtonLotty = () => {
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
        <Lottie options={defaultOptions} height={18} width={50} />
      </div>
    </>
  );
};

export default LoginButtonLotty;
