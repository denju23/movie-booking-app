import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingSummary from "./BookingSummary";
import { act } from "@testing-library/react";
import { errorToast } from "./Tostify";
import MovieLottiy from "./Loader/MovieLottiy";
const MovieSeatLayout = () => {
  const navigate = useNavigate();
  const { v4: uuidv4 } = require("uuid");

  const SEAT_STRUCTURE = [
    {
      row: "A",
      seats: [
        {
          seatNo: "A1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A10",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A11",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A12",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A13",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A14",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A15",
          id: uuidv4(),
          isReserved: false,
        },

        {
          seatNo: "A16",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A17",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A18",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A19",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A20",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A21",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A22",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A23",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A24",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "A25",
          id: uuidv4(),
          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "B",
      seats: [
        {
          seatNo: "B1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B10",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B11",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B12",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B13",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B14",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B15",
          id: uuidv4(),
          isReserved: false,
        },

        {
          seatNo: "B16",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B17",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B18",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B19",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B20",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B21",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B22",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B23",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B24",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "B25",
          id: uuidv4(),
          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "C",
      seats: [
        {
          seatNo: "C1",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C2",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C3",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C4",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C5",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C6",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C7",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C8",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C9",

          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C10",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C11",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C12",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C13",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C14",
          id: uuidv4(),
          isReserved: false,
        },

        {
          seatNo: "C15",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C16",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C17",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C18",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C19",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C20",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C21",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C22",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C23",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C24",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "C25",
          id: uuidv4(),
          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "D",
      seats: [
        {
          seatNo: "D1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "D9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D10",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D11",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D12",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D13",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D14",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D15",
          isReserved: false,
        },

        {
          id: uuidv4(),
          seatNo: "D16",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D17",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D18",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D19",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D20",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D21",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D22",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D23",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D24",
          isReserved: false,
        },
        {
          id: uuidv4(),
          seatNo: "D25",
          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "E",
      seats: [
        {
          seatNo: "E1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "E10",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E11",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E12",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E13",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E14",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E15",
          id: uuidv4(),

          isReserved: false,
        },

        {
          seatNo: "E16",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E17",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E18",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E19",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E20",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E21",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E22",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E23",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E24",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "E25",
          id: uuidv4(),

          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "F",
      seats: [
        {
          seatNo: "F1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "F10",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F11",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F12",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F13",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F14",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F15",
          id: uuidv4(),

          isReserved: false,
        },

        {
          seatNo: "F16",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F17",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F18",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F19",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F20",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F21",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F22",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F23",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F24",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "F25",
          id: uuidv4(),

          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
    {
      row: "G",
      seats: [
        {
          seatNo: "G1",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G2",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G3",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G4",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G5",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G6",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G7",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G8",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G9",
          id: uuidv4(),
          isReserved: false,
        },
        {
          seatNo: "G10",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G11",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G12",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G13",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G14",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G15",
          id: uuidv4(),

          isReserved: false,
        },

        {
          seatNo: "G16",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G17",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G18",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G19",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G20",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G21",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G22",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G23",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G24",
          id: uuidv4(),

          isReserved: false,
        },
        {
          seatNo: "G25",
          id: uuidv4(),

          isReserved: false,
        },
      ],
      totalSeats: 25,
    },
  ];

  const [bookedSeats, setBookedSeats] = React.useState("");
  const [modal, setModal] = React.useState(false);

  const SelectedTime = localStorage.getItem("MovieTime");
  const SelectedDate = localStorage.getItem("MovieDate");

  const getSeats = (e) => {
    const markedSeats = e.target.value;
    const doGetNumberOfSeats = JSON.parse(
      localStorage.getItem("NumberOfSeats")
    );
    console.log(doGetNumberOfSeats);
    if (doGetNumberOfSeats > 0) {
      if (bookedSeats.length < doGetNumberOfSeats) {
        setBookedSeats((bookedSeats) =>
          bookedSeats.includes(markedSeats)
            ? bookedSeats.filter((n) => n !== markedSeats)
            : [markedSeats, ...bookedSeats]
        );

        const bbgc = e.target.style.backgroundColor;

        if (bbgc === "white") {
          e.target.style.backgroundColor = "#0cb30c";
          e.target.style.color = "#fff";
        } else {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "#000";
        }
      } else {
        setBookedSeats([markedSeats]);
        errorToast(`Select Upto ${doGetNumberOfSeats} seats Only`);
        window.location.reload();
      }
    }
  };

  const bookedtiket = () => {
    localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));

    setModal(true);
  };

  useEffect(() => {
    const doVerifyUserBooked =
      JSON.parse(localStorage.getItem("UserTicket")) || "";
    console.log(doVerifyUserBooked, "BookedTickit");
    const doverifyBookedDate = decodeURIComponent(
      localStorage.getItem("MovieDate")
    );
    const doverifyBookedTheater = localStorage.getItem("MovieTime");
    const doverifyBookedMovieName = localStorage.getItem("MovieName");
    console.log(doverifyBookedDate);
    console.log(doverifyBookedTheater);

    doVerifyUserBooked &&
      doVerifyUserBooked.map((el, i) => {
        if (
          el.TheaterAndTime == doverifyBookedTheater &&
          el.Date == doverifyBookedDate &&
          el.MovieName == doverifyBookedMovieName
        ) {
          // const myarr = JSON.parse(localStorage.getItem("bookedSeats"));
          const myarr = el.Seats;
          if (myarr !== null && myarr.length > 0) {
            if (myarr.every(check) === false) {
              for (var i = 0; i < myarr.length; i++) {
                var res = document.querySelectorAll(`#itemId${myarr[i]}`);
                console.log(res);
                res[0].style.backgroundColor = "#a698a3";
                res[0].style.cursor = "not-allowed";
                res[0].disabled = !res[0].disabled;
              }
            }
          }
        }
      });
  }, []);

  function check() {
    SEAT_STRUCTURE.map((el) => {
      el.seats.map((n) => {
        return n.seatNo;
      });
    });
  }

  return (
    <>
      <div className='mx-auto max-w-screen-xl md:px-8 px-5 py-3'>
        <div
          className='py-3 mb-5 px-2 text-white'
          style={{ background: "#1f2533" }}
        >
          <h1 className='mb-3 text-uppercase'>{SelectedTime}</h1>
          <h1 className='text-uppercase'> Date : {SelectedDate} </h1>
        </div>
        <div style={{ background: "#fafafa" }} className='px-3 py-3'>
          <div className='flex items-center justify-between mb-2'>
            <div className=''>
              <h1 className='text-xl'>Price Per Seat:RS.200</h1>
            </div>
            <div className='flex items-center mb-2'>
              <div
                className='me-2'
                style={{
                  height: "14px",
                  width: "14px",
                  backgroundColor: "#a698a3",
                }}
              ></div>
              <span className='me-2'>sold</span>
              <div
                className='me-2'
                style={{
                  height: "14px",
                  width: "14px",
                  backgroundColor: "white",
                  border: "1px solid green",
                }}
              ></div>
              <span className='me-2'>Available</span>
              <div
                className='me-2'
                style={{
                  height: "14px",
                  width: "14px",
                  backgroundColor: "#0cb30c",
                  border: "1px solid green",
                }}
              ></div>
              <span className='me-2'>Selected</span>
            </div>
          </div>
          <div className='flex justify-between '>
            <div>
              {SEAT_STRUCTURE.map((element, i) => {
                return (
                  <div key={i}>
                    <div className='mb-3'>
                      {element.seats.slice(0, 10).map((item, i) => {
                        return (
                          <button
                            className='border h-10 w-10'
                            id={`itemId${item.seatNo}`}
                            key={i}
                            onClick={(e) => getSeats(e)}
                            value={item.seatNo}
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              cursor: "pointer",
                            }}
                          >
                            {item.seatNo}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              {SEAT_STRUCTURE.map((element, i) => {
                return (
                  <div key={i}>
                    <div className='mb-3'>
                      {element.seats.slice(10, 15).map((item, i) => {
                        return (
                          <button
                            className='border h-10 w-10'
                            id={`itemId${item.seatNo}`}
                            key={i}
                            onClick={(e) => getSeats(e)}
                            value={item.seatNo}
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              cursor: "pointer",
                            }}
                          >
                            {item.seatNo}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              {SEAT_STRUCTURE.map((element, i) => {
                return (
                  <div key={i}>
                    <div className='mb-3'>
                      {element.seats.slice(15, 25).map((item, i) => {
                        return (
                          <button
                            className='border h-10 w-10'
                            id={`itemId${item.seatNo}`}
                            key={i}
                            onClick={(e) => getSeats(e)}
                            value={item.seatNo}
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              cursor: "pointer",
                            }}
                          >
                            {item.seatNo}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='mt-5'>
            <div className='w-96 mx-auto h-10 bg-black'>
              <div className='w-64 mx-auto h-5  bg-white text-center text-black'>
                All eyes this way please
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          {bookedSeats.length === 0 ? (
            ""
          ) : (
            <div className='mt-4'>
              <button
                className='px-4 py-3 w-44 flex items-center justify-center'
                style={{
                  background: "#f84464",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",

                  color: "#fff",
                }}
                onClick={bookedtiket}
              >
                Confirm Seats
              </button>
            </div>
          )}
        </div>
        <BookingSummary modal={modal} setModal={setModal} />
      </div>
    </>
  );
};

export default MovieSeatLayout;
