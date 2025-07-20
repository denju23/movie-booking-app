import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "./Tostify";
import PaymentLotty from "./Loader/PaymentLotty";

const DummyPayment = () => {
  const navigate = useNavigate();

  const doConfirmBooking = () => {
    const docheckLogin = JSON.parse(localStorage.getItem("token"));
    const SelectedTime = localStorage.getItem("MovieTime");
    const SelectedDate = localStorage.getItem("MovieDate");
    const SelectedMovieName = localStorage.getItem("MovieName");
    const SelectedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || "";
    const TotalPrice = SelectedSeats.length * 200;
    const data = {
      MovieName: SelectedMovieName,
      TheaterAndTime: SelectedTime,
      Date: SelectedDate,
      Seats: SelectedSeats,
      AmountPay: TotalPrice,
    };
    if (docheckLogin && SelectedTime && SelectedDate && SelectedSeats) {
      navigate("/confirmticket");
      successToast("Payment Done Successfully ");

      let ans = JSON.parse(localStorage.getItem("UserTicket")) || [];
      ans.push(data);
      localStorage.setItem("UserTicket", JSON.stringify(ans));
    } else {
      errorToast("Login To continue");
    }
  };

  return (
    <>
      <div>
        <div>
          <h1
            className='font-bold'
            style={{ background: "#f84464", padding: "10px" }}
          >
            Enter Your Card Details
          </h1>
        </div>
        <div>
          <div>
            <div
              className='w-96 h-56  rounded-xl relative text-white shadow-2xl transition-transform transform mt-3 mb-3'
              style={{
                background:
                  "linear-gradient(125deg,#dadee3 0,#dadee3 50%,#d2d6de 51%,#d2d6de 100%)",
              }}
            >
              <div className='w-full px-8 absolute top-8'>
                <div className='flex justify-between'>
                  <div className=''>
                    <p className='font-light'>Card Number</p>

                    <input
                      className='font-medium tracking-widest'
                      type='text'
                      placeholder='Enter Your Card Number'
                    />
                  </div>
                </div>
                <div className='pt-1'>
                  <input
                    className='font-medium tracking-more-wider'
                    type='text'
                    placeholder='Name on Card'
                  />
                </div>
                <div className='pt-6 pr-6'>
                  <div className='flex justify-around'>
                    <div className=''>
                      <input
                        type='text'
                        className='font-light text-xs text-xs px-1 py-1'
                        placeholder='MM'
                        style={{
                          width: "55px",
                          //   height: "35px",
                          marginRight: "10px",
                          textAlign: "center",
                        }}
                      />
                      <input
                        type='text'
                        className='font-light text-xs text-xs px-1 py-2'
                        placeholder='DD'
                        style={{
                          width: "35px",
                          //   height: "35px",
                          marginRight: "10px",
                          textAlign: "center",
                        }}
                      />
                    </div>

                    <div className=''>
                      <input
                        type='text'
                        placeholder='CVV'
                        style={{
                          width: "45px",
                          height: "35px",
                          marginRight: "10px",
                          textAlign: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className='px-4 py-3 w-44 flex items-center justify-center'
              style={{
                background: "#f84464",
                borderRadius: "10px",
                border: "none",
                outline: "none",

                color: "#fff",
                width: "203px",
              }}
              onClick={doConfirmBooking}
            >
              <PaymentLotty />
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyPayment;
