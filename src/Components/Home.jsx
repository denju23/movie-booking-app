import React from "react";
import MovieList from "./MovieList";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const navigate = useNavigate();
  //   React.useEffect(() => {
  //     const doVerifyLoginDetail = localStorage.getItem("token");
  //     console.log(doVerifyLoginDetail);
  //     if (!doVerifyLoginDetail) {
  //       return navigate("/loginpage");
  //     } else {
  //       return navigate("/home");
  //     }
  //   }, []);
  return (
    <>
      <MovieList />
    </>
  );
};

export default Home;
