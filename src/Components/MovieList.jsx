import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../Action/ItemsAction";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Footer from "./Footer";
const MovieList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Items } = useSelector((state) => state.Items);
  // console.log(Items);

  const getMovieDetails = (id, name) => {
    console.log(id);
    localStorage.setItem("MovieName", name);
    navigate(`/moviedetailpage/${id}`);
  };
  React.useEffect(() => {
    dispatch(getItems());

    return () => {
      // dispatch(getItems());
    };
  }, [dispatch]);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img
              className='w-full h-80'
              src='https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_960_720.jpg'
              alt=''
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className='w-full h-80'
              src='https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__340.png'
              alt=''
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className='w-full h-80'
              src='https://c4.wallpaperflare.com/wallpaper/980/989/146/noir-heath-ledger-movies-batman-wallpaper-thumb.jpg'
              alt=''
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className='w-full h-80'
              src='https://img.freepik.com/free-vector/realistic-film-strip-background-with-clapper-board_1017-31191.jpg?size=626&ext=jpg&ga=GA1.1.2097669234.1681017827&semt=ais'
              alt=''
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className='w-full h-80'
              src='https://img.freepik.com/free-vector/realistic-horizontal-cinema-movie-time-poster-with-3d-glasses-snacks-tickets-clapper-reel-blue-background-with-bokeh-vector-illustration_1284-77013.jpg?size=626&ext=jpg&ga=GA1.1.2097669234.1681017827&semt=ais'
              alt=''
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='container'>
        <div>
          <div className='bg-white py-6 sm:py-8 lg:py-12'>
            <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
              <div className='mb-6 flex items-end justify-between gap-4'>
                <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                  The Best Movies
                </h2>

                {/* <a
                href='#'
                className='inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base'
              >
                Show more
              </a> */}
              </div>

              <div className='grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4'>
                {Items.map((el, i) => {
                  return (
                    <div key={el.id}>
                      <div
                        className='mb-5'
                        key={i}
                        onClick={() =>
                          getMovieDetails(el.id, el.original_title)
                        }
                      >
                        <a
                          href=''
                          className='group mb-2 block  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src={`http://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
                            loading='lazy'
                            alt='Photo by Austin Wade'
                            className='h-full w-full object-contain object-center transition duration-200 group-hover:scale-110'
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg";
                            }}
                          />
                        </a>

                        <div className='flex flex-col'>
                          <span className='text-gray-500'>
                            {moment(el.release_date).format("LL")}
                          </span>
                          <a
                            href=''
                            className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                          >
                            {el.original_title}
                          </a>
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
      <div className='mt-5 mb-5 container'>
        <img
          src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png'
          alt='Stream'
          width='100%'
          height='100%'
        ></img>
      </div>

      <div className='container'>
        <div>
          <div className='bg-white py-6 sm:py-8 lg:py-12'>
            <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
              <div className='mb-6 flex items-end justify-between gap-4'>
                <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                  Recommended Movies
                </h2>

                {/* <a
                href='#'
                className='inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base'
              >
                Show more
              </a> */}
              </div>

              <div className='grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4'>
                {Items.slice(0, 4).map((el, i) => {
                  return (
                    <div key={el.id}>
                      <div
                        className='mb-5'
                        key={i}
                        onClick={() => getMovieDetails(el.id)}
                      >
                        <a
                          href=''
                          className='group mb-2 block  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src={`http://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
                            loading='lazy'
                            alt='Photo by Austin Wade'
                            className='h-full w-full object-contain object-center transition duration-200 group-hover:scale-110'
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg";
                            }}
                          />
                        </a>

                        <div className='flex flex-col'>
                          <span className='text-gray-500'>
                            {moment(el.release_date).format("LL")}
                          </span>
                          <a
                            href=''
                            className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                          >
                            {el.original_title}
                          </a>
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

      <Footer />
    </>
  );
};

export default MovieList;
