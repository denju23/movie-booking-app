import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { errorToast } from "./Tostify";
import MovieSeatsNumber from "./MovieSeatsNumber";

const MovieTheaterList = ({ movie }) => {
  const navigate = useNavigate();
  const TheaterList = [
    {
      Name: "PVR",
      Time: ["12:00PM", "03:00PM", "05:00PM", "08:00PM", "11:00PM"],
    },
    {
      Name: "Connplex Smart Theatre Prahladnagar",
      Time: ["12:00PM", "03:00PM", "05:00PM", "08:00PM", "11:00PM"],
    },
    {
      Name: "City Gold Satellite: Ahmedabad",
      Time: ["12:00PM", "03:00PM", "05:00PM", "08:00PM", "11:00PM"],
    },
  ];
  const today = new Date();
  const numberOfDaysToAdd = 0;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd
  const minValue = new Date(date).toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState("");
  const [modal, setModal] = useState(false);

  const getTickitBookingDate = (e) => {
    const date = e.target.value;
    if (date) {
      localStorage.setItem("MovieDate", date);
      setSelectedDate(date);
    }
  };

  const getTickitBookingTime = (e) => {
    const time = e.target.value;

    if (selectedDate) {
      localStorage.setItem("MovieTime", time);
      setModal(true);
    } else {
      errorToast("You Need To Select Date");
    }
  };

  useEffect(() => {
    localStorage.removeItem("MovieDate");
    localStorage.removeItem("MovieTime");
    // return () => {
    //   selectedDate("");
    // };
  }, []);
  return (
    <div>
      <div className='flex items-center' style={{ height: "100vh" }}>
        <div
          className='mx-auto max-w-screen-xl md:px-8'
          style={{
            boxShadow:
              "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
          }}
        >
          <div
            className='mt-5 pb-3 flex items-center flex-col mx-auto
'
            style={{
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
              width: "max-content",
            }}
          >
            <div className=''>
              <h1
                className='px-5 text-2xl mb-4 text-white'
                style={{ background: "#9f4242" }}
              >
                {movie.title}- {movie.original_language}
              </h1>
            </div>
            <div>
              <input
                className='border px-3 py-2'
                type='date'
                id='myDate'
                onChange={(e) => getTickitBookingDate(e)}
                // value={!selectedDate ? minValue : selectedDate}
                value={selectedDate}
                min={minValue}
                defaultValue={defaultValue}
                // required
                style={{ outline: "none" }}
              />
            </div>
          </div>
          <div>
            <div className='bg-white py-6 sm:py-8 lg:py-12'>
              <div className='px-5 overflow-y-auto max-h-96'>
                {TheaterList.map((el, i) => {
                  return (
                    <div key={i}>
                      <div
                        className='grid gap-8 md:grid-cols-2 lg:gap-8 mt-5 p-6 rounded-lg'
                        key={i}
                        style={{
                          boxShadow:
                            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px ",
                        }}
                      >
                        <div>
                          <div className='overflow-hidden rounded-lg   md:h-auto'>
                            <div>{el.Name}</div>
                          </div>
                        </div>

                        <div className=''>
                          <div className='flex justify-between flex-wrap'>
                            <button
                              className='px-3 py-1 border text-emerald-500 me-1 hover:bg-lime-700 hover:text-white '
                              onClick={(e) => getTickitBookingTime(e)}
                              value={` ${el.Name}/${el.Time[0]}`}
                            >
                              {el.Time[0]}
                            </button>
                            <button
                              className='px-3 py-1 border text-emerald-500 me-1 hover:bg-lime-700 hover:text-white '
                              onClick={(e) => getTickitBookingTime(e)}
                              value={`${el.Name}/${el.Time[1]}`}
                            >
                              {el.Time[1]}
                            </button>
                            <button
                              className='px-3 py-1 border text-emerald-500 me-1 hover:bg-lime-700 hover:text-white '
                              onClick={(e) => getTickitBookingTime(e)}
                              value={`${el.Name}/${el.Time[2]}`}
                            >
                              {el.Time[2]}
                            </button>
                            <button
                              className='px-3 py-1 border text-emerald-500 me-1 hover:bg-lime-700 hover:text-white '
                              onClick={(e) => getTickitBookingTime(e)}
                              value={`${el.Name}/${el.Time[3]}`}
                            >
                              {el.Time[3]}
                            </button>
                            <button
                              className='px-3 py-1 border text-emerald-500 me-1 hover:bg-lime-700 hover:text-white '
                              onClick={(e) => getTickitBookingTime(e)}
                              value={`${el.Name}/${el.Time[4]}`}
                            >
                              {el.Time[4]}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieSeatsNumber modal={modal} setModal={setModal} />
    </div>
  );
};

export default MovieTheaterList;
