import React from "react";
import animationData from "../Loader/MovieDetailLoader.json";
import Lottie from "react-lottie";

const LoginLottiy = () => {
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
      <div style={{ background: "#fff" }}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  );
};

export default LoginLottiy;
