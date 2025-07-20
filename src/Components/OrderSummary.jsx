import React from "react";
import LoginDetail from "./LoginDetail";
import DummyPayment from "./DummyPayment";
import OrderSummaryDetail from "./OrderSummaryDetail";
import Footer from "./Footer";

const OrderSummary = () => {
  let docheckLogin = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <div className='container'>
        <div className='flex justify-between'>
          <div
            className='w-full px-3 py-2 mx-4'
            style={{
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
            }}
          >
            <div>{docheckLogin ? "" : <LoginDetail />}</div>
            <div>
              <DummyPayment />
            </div>
          </div>
          <div
            className='px-3 py-2'
            style={{
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
            }}
          >
            <OrderSummaryDetail />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OrderSummary;
