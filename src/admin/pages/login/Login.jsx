import React, { useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import showPwdImg from '../../../svg/show-password.svg';
import hidePwdImg from '../../../svg/hide-password.svg';

import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
//   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleClick = async (e) => {
e.preventDefault();
const user = {
  email: e.target.email.value,
  password: e.target.password.value,
}

try {
await axios.post('/auth/login', user)
.then(response =>{
  console.log(response.data)
  if(response.data.result == "0"){
    return console.log('Error -> Login');
  }
  // save token
  localStorage.setItem('auth_admin' , response.data.token);
  navigate('/admin/dashboard')
})
.catch(error =>{
  console.log(error);
})
} catch (error) {
  console.log(error)
}



  };
  return (
    <>
      <div className="mb-20">
        <div className=" m-auto w-screen h-[180px] z-10  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg relative">
          <h1 className="text-white text-4xl font-semibold absolute top-20 left-40">Admin</h1>
        </div>
        <div className="container flex mx-auto max-w-screen-md items-center h-auto mt-20">
        <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
            <div className="flex flex-col items-center bg-white p-4 px-16 rounded border border-gray-primary mb-4">
              <h1 className="flex justify-left font-medium w-full text-2xl py-6">
                Sign in to Admin Panel
              </h1>

           
           
              <form onSubmit={handleClick} method="POST" className="w-full">
                <input
                  type="text"
                  id="email"
                  ref={email}
                  aria-label="Enter your email address"
                  placeholder="Email Address"
                  name='number'
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
                />
                <div className="relative">
                  <input
                    aria-label="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    name="password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded "
                    ref={password}
                  />
                  <img
                    className="absolute cursor-pointer w-5 right-2 top-3"
                    title={showPassword ? 'Hide password' : 'Show password'}
                    src={showPassword ? hidePwdImg : showPwdImg}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    alt="img"
                  />
                </div>
                <p className="my-4 text-sm flex justify-end underline">Forgot Password?</p>
                <button
                  type="submit"
                //   disabled={isFetching}
                  className={`bg-black mb-3 text-white w-full rounded h-8 font-bold`}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// bg-[url('https://i.imgur.com/6ZyzH0D.png')] bg-cover bg-center
