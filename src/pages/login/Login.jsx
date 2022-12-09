import React, { useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { FaBeer } from 'react-icons/fa';
import showPwdImg from '../../svg/show-password.svg';
import hidePwdImg from '../../svg/hide-password.svg';
import Footer from '../../components/Layout/footer';
import GetStarted from '../../components/homepage/GetStarted';
import axios from 'axios';

const Login1 = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { isFetching, dispatch } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async (e) => {



e.preventDefault();


const user = {

  email: email.current.value,
  password: password.current.value,
}



try {
await axios.post('/auth/login', user)
.then(response =>{
  console.log(response.data)
  if(response.data.result == "0"){
    return console.log('Error -> Login');
  }
  // save token
  localStorage.setItem('auth' , response.data.token);
  navigate('/network')
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
          <h1 className="text-white text-4xl font-semibold absolute top-20 left-40">Login</h1>
        </div>
        <div className="container flex mx-auto max-w-screen-md items-center h-auto mt-20">
        <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
            <div className="flex flex-col items-center bg-white p-4 px-16 rounded border border-gray-primary mb-4">
              <h1 className="flex justify-left font-medium w-full text-2xl py-6">
                Sign in to your account
              </h1>

              <button
                className="flex justify-center items-center  text-black border bg-transparent border-[black]
              rounded-sm w-full h-10 mb-5"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  className="w-5"
                />{' '}
                <span className="pl-3 text-sm">Log in with Google</span>{' '}
              </button>
              <p className="mb-5 text-[#8f8f8f]">----- or Login with Email -----</p>
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
                  disabled={isFetching}
                  className={`bg-black mb-3 text-white w-full rounded h-8 font-bold`}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary">
              <p className="text-sm">
                Not registered?
                <Link to="/register" className="pl-2 underline">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <GetStarted className="" />
      <Footer className="" />
    </>
  );
};

export default Login1;

// bg-[url('https://i.imgur.com/6ZyzH0D.png')] bg-cover bg-center
