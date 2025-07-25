import React from "react";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const SelectedTime = localStorage.getItem("MovieTime");
  const SelectedDate = localStorage.getItem("MovieDate");
  const SelectedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || "";
  const TotalPrice = SelectedSeats.length * 200;

  const doPayment = () => {
    navigate("/ordersummary");
  };

  const doCancelPayment = () => {
    setModal(false);
    localStorage.removeItem("bookedSeats");
    window.location.reload();
  };
  if (!modal) return null;
  return (
    <>
      <div>
        <div
          id='popup-modal'
          tabIndex='-1'
          className='fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full d-block'
          style={{ background: "#00000087" }}
        >
          <div className='relative w-full max-w-md max-h-full mx-auto'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <button
                type='button'
                className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                data-modal-hide='popup-modal'
                onClick={doCancelPayment}
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
              <div className='p-6'>
                <div className='mb-3'>
                  <h3
                    className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'
                    style={{ color: "#c02c39" }}
                  >
                    BOOKING SUMMARY
                  </h3>
                  <p>{SelectedTime}</p>
                  <p>Premium-{SelectedSeats}</p>
                  <p>{SelectedDate}</p>
                  <div className='mt-4 mb-4'>
                    <p style={{ background: "#fffcdc" }} className='py-3 px-1'>
                      AMOUNT PAYABLE:{" "}
                      <span
                        style={{ paddingLeft: "2px", fontWeight: "bolder" }}
                      >
                        RS.{TotalPrice}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  onClick={doPayment}
                  className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
                >
                  Proceed
                </button>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
                  onClick={doCancelPayment}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;
