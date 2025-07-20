import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeatLoatty from "./Loader/SeatLoatty";
import { errorToast } from "./Tostify";

const MovieSeatsNumber = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const [number, setNumber] = React.useState("");

  const getSeatsNumber = () => {
    if (number == "") {
      errorToast("Please Choose Number seat");
    } else {
      navigate("/movieseatlayout");
      localStorage.setItem("NumberOfSeats", JSON.stringify(number));
    }
  };

  useEffect(() => {
    localStorage.removeItem("NumberOfSeats");
    // return()=>{
    //   setNumber('')
    // }
  });
  if (!modal) return null;
  return (
    <>
      <div className=''>
        <div
          id='popup-modal'
          tabIndex='-1'
          className='fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full d-block '
          style={{ background: "#00000087" }}
        >
          <div className='relative w-full max-w-md max-h-full mx-auto flex h-screen justify-center items-center'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 px-5'>
              <button
                type='button'
                className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                data-modal-hide='popup-modal'
                onClick={() => setModal(false)}
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
              <div className='p-6 flex justify-center items-center flex-col text-center'>
                <div className='mb-3'>
                  <h3
                    className='mb-3 text-lg font-bold text-gray-500 dark:text-gray-400 mb-5 text-2xl '
                    style={{ color: "#c02c39" }}
                  >
                    How Many Seats ?
                  </h3>
                  <div>
                    <SeatLoatty />
                  </div>
                  <div>
                    <form>
                      <select
                        className='mb-3 py-1 px-1 text-center border'
                        name='numberofseats'
                        id='numberofseats'
                        onChange={(e) => setNumber(e.target.value)}
                      >
                        <option value=''>Select Number of Seat</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                      </select>
                    </form>
                  </div>
                </div>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  onClick={getSeatsNumber}
                  className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
                >
                  Select Seats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSeatsNumber;
