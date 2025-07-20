import React from "react";
import animationData from "../Loader/Payment.json";
import Lottie from "react-lottie";

const PaymentLotty = () => {
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

export default PaymentLotty;
