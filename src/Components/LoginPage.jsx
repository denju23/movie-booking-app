import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast } from "./Tostify";
// import LoginLottiy from "./Loader/LoginLottyFile.json";
import LoginLottiy from "./Loader/LoginLottiy";
import LogOutButtonLotty from "./Loader/LogOutButtonLotty";
import LoginButtonLotty from "./Loader/LoginButtonLotty";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const database = [
    {
      useremail: "denju@gmail.com",
      password: "Test@123",
    },
    {
      useremail: "meet@gmail.com",
      password: "Test@123",
    },
  ];

  const doValidationLogin = () => {
    let err = errors;
    // const emailcond = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.trim()) {
      err.email = " Email is required";
    } else {
      err.email = "";
    }

    if (password.length < 8) {
      err.password = "Password Must be 8 Characters Long";
    } else {
      err.password = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = database.find((user) => user.useremail === email);

    if (userData) {
      if (userData.password !== password) {
        alert("Invalid Password");
      } else {
        let ans = JSON.parse(localStorage.getItem("token")) || [];
        ans.push({ email: email, password: password });
        localStorage.setItem("token", JSON.stringify(ans));
        navigate("/home");
        successToast("User LogIn SuccessFully");
      }
    } else {
      alert("invalid Email");
    }
  };

  return (
    <>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
            <div>
              <div className='h-64 overflow-hidden rounded-lg bg-gray-100  md:h-auto'>
                <LoginLottiy />
              </div>
            </div>

            <div className='md:pt-8'>
              <div className='mb-10'>
                <span className='text-6xl'>Login</span>
              </div>
              <form action='' onSubmit={handleSubmit}>
                <div className='mb-8'>
                  <label htmlFor='' className='text-2xl'>
                    Email
                  </label>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='w-full border-solid border border-gray-600 py-1.5 px-1'
                    style={{ outline: "none" }}
                  />
                  {/* {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )} */}
                </div>
                <div className='mb-8'>
                  <label htmlFor='' className='text-2xl'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='w-full border-solid border border-gray-600 py-1.5 px-1'
                    style={{ outline: "none" }}
                  />
                  {/* {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )} */}
                </div>
                <div className=''>
                  <button
                    className='px-4 py-3 w-44 flex items-center justify-center'
                    style={{
                      background: "blue",
                      borderRadius: "10px",
                      border: "none",
                      outline: "none",

                      color: "#fff",
                    }}
                  >
                    <LoginButtonLotty />
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
