import React, { useState } from "react";
import LoginButtonLotty from "./Loader/LoginButtonLotty";
import { errorToast, successToast } from "./Tostify";
const LoginDetail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        successToast("User LogIn SuccessFully");
      }
    } else {
      errorToast("invalid Email");
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1
            className='font-bold'
            style={{ background: "#f84464", padding: "10px" }}
          >
            Share Your Contact Details
          </h1>
        </div>

        <div className='mt-3'>
          <form action='' onSubmit={handleSubmit}>
            <div className='flex'>
              <div className='mb-8'>
                <label htmlFor='' className='text-xl me-2'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  className=' border-solid border border-gray-600 py-1.5 px-1'
                  style={{ outline: "none" }}
                />
                {/* {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )} */}
              </div>
              <div className='ms-3'>
                <label htmlFor='' className='text-xl me-2'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  className=' border-solid border border-gray-600 py-1.5 px-1'
                  style={{ outline: "none" }}
                />
                {/* {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )} */}
              </div>
            </div>
            <div className='mb-3'>
              <button
                className='px-4 py-3 w-44 flex items-center justify-center'
                style={{
                  background: "#f84464",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                }}
                onClick={() => window.location.reload()}
              >
                <LoginButtonLotty />
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginDetail;
