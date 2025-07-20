import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TicketLotty from "./Loader/TicketLotty";

const ConfirmTicket = () => {
  const navigate = useNavigate();
  const SelectedTime = localStorage.getItem("MovieTime");
  const SelectedDate = localStorage.getItem("MovieDate");
  const SelectedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || "";
  const TotalPrice = SelectedSeats.length * 200;
  return (
    <div>
      <div style={{ height: "68vh" }}>
        <div className='flex justify-center'>
          <div
            className='px-5 py-5'
            style={{
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
            }}
          >
            <div>
              <TicketLotty />
            </div>
            <h1 className='font-bold mb-3'>Confirm Ticket</h1>
            <div className='mb-3 space-y-6'>
              <p>{SelectedTime}</p>
              <p>SEAT:{SelectedSeats}</p>
              <p>DATE:{SelectedDate}</p>
              <p>AMOUNT PAY:RS.{TotalPrice}</p>
            </div>
            <div className='font-bold'>
              <p>Thank You For Booking</p>
              <p>Ticket Send to your Register Mobile Number and Email</p>
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
            }}
            onClick={() => navigate("/home")}
          >
            Go To Home
          </button>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ConfirmTicket;
