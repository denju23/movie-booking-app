import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../Action/ItemsAction";
import moment from "moment";
import MovieLottiy from "../Components/Loader/MovieLottiy";
import MovieTheaterList from "./MovieTheaterList";
import { Icon } from "@iconify/react";
import Footer from "./Footer";
import ScroolLotty from "./Loader/ScroolLotty";

const MovieDetailPage = () => {
  const param = useParams();
  // console.log(param.id);
  const dispatch = useDispatch();
  const { Items, loading } = useSelector((state) => state.Items);
  const MovieDetailsArray = Items.filter((item) => item.id == param.id);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <>
          <MovieLottiy />
        </>
      ) : (
        <>
          {MovieDetailsArray.map((el, i) => {
            const {
              original_language,
              original_title,
              vote_average,
              vote_count,
              release_date,
              poster_path,
              overview,
            } = el;
            return (
              <div key={i}>
                <div className='bg-white  sm:py-8 lg:py-12'>
                  <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                    <div
                      className='grid gap-8 md:grid-cols-2 lg:gap-12 items-center px-2 py-2 rounded-lg'
                      style={{
                        boxShadow:
                          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                      }}
                    >
                      <div>
                        <div className='h-64 overflow-hidden rounded-lg   md:h-auto'>
                          <img
                            src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                            loading='lazy'
                            alt='Photo by Martin Sanchez'
                            className='h-full    object-cover object-center rounded-lg'
                            style={{ margin: "0 auto" }}
                          />
                        </div>
                      </div>

                      <div className='md:pt-8'>
                        <div className='mb-10'>
                          <span className='text-6xl'>MovieDetils</span>
                        </div>
                        <div className='mb-10'>
                          <h2 className='mb-2 text-2xl'>{original_title}</h2>
                        </div>
                        <div className='mb-10'>
                          <p>{overview}</p>
                        </div>
                        <div className='  '>
                          <p className='text-lg border inline-block bg-stone-400  mb-10 rounded px-2 py-1'>
                            2D, ICE 3D, IMAX 3D, 4DX 3D, 3D
                          </p>
                          <span className='text-lg border inline-block bg-stone-400  mb-10 rounded px-2 py-1 mx-2 '>
                            {original_language}
                          </span>
                        </div>
                        <div className='mb-10'>
                          <p>
                            2h 25m . Action, Drama, Thrillers . UA .{" "}
                            {moment(release_date).format("LL")}
                          </p>
                        </div>
                        <div className='mb-10'>
                          <p>
                            <Icon
                              icon='material-symbols:star'
                              className='inline-block'
                            />
                            {vote_average}/ 10{" "}
                            <span className='border inline-block bg-stone-400  mb-10 rounded px-2 py-1 mx-2'>
                              {vote_count} Votes
                            </span>
                          </p>
                        </div>
                        <div className='mb-10'>
                          <button
                            className='border flex items-center rounded-lg'
                            style={{
                              background: "#f84464",
                              borderRadius: "10px",
                              border: "none",
                              outline: "none",
                              padding: "12px 30px",
                              color: "#fff",
                            }}
                            onClick={handleScroll}
                          >
                            <ScroolLotty />
                            Book Show
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MovieTheaterList movie={el} />
              </div>
            );
          })}
          <Footer />
        </>
      )}
    </>
  );
};

export default MovieDetailPage;
