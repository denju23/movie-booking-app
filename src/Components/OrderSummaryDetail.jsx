import React from "react";

const OrderSummaryDetail = () => {
  const doGetMovieName = localStorage.getItem("MovieName");
  const SelectedTime = localStorage.getItem("MovieTime");
  const SelectedDate = localStorage.getItem("MovieDate");
  const SelectedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || "";
  const TotalPrice = SelectedSeats.length * 200;
  return (
    <div>
      <h1
        style={{ background: "#f84464", padding: "10px" }}
        className='font-bold'
      >
        Order Summary
      </h1>
      <div className='space-y-6'>
        <h1 className='font-bold text-2xl'>{doGetMovieName}</h1>
        <p className='font-bold'>
          <span>{SelectedTime}</span>
        </p>
        <p className='font-bold'>
          SEAT: <span>{SelectedSeats}</span>
        </p>
        <p className='font-bold'>
          DATE: <span>{SelectedDate}</span>
        </p>
        <p className='font-bold'>
          AMOUNT PAYABLE: <span>RS.{TotalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryDetail;
