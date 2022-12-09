import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import showPwdImg from '../../svg/show-password.svg';
import hidePwdImg from '../../svg/hide-password.svg';
import Footer from '../../components/Layout/footer';

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();

// TODO: <- just a test
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
      // localhost:3000/auth/signup
      await axios.post('/auth/signup', user)
      .then(response =>{
        console.log(response.data)
        if(response.data.result === "0"){
          return console.log(`An error`)
        }
        // This is how to store token in localstorage
        localStorage.setItem('auth' , response.data.token)
        navigate('/register1')
      })
      .catch(error =>{
        console.log('Error' , error)
      })
      // navigate('/register1')
      } catch (error) {
        console.log(error)
      }
  };


  return (
    <>
    {/* FIXME: can't seperate the header and footer */}
    <div className=''>

      <div>
        <div className=" m-auto w-screen h-[180px] z-10  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg relative">
          <h1 className="text-white text-4xl font-semibold absolute px-28 pt-20 ">
            Create Account
          </h1>
        </div>
        <div className="container flex mx-auto max-w-screen-md items-center  mt-20">
          <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
            <div className="flex flex-col items-center bg-white lg:p-4 lg:px-16 p-2 rounded border border-gray-primary mb-4 ">
              <h1 className="flex justify-left font-medium w-full text-2xl py-6">Register</h1>

              <button
                className="flex justify-center items-center text-black border bg-transparent border-[black]
            rounded-sm w-full h-10 mb-5"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  className="w-5"
                />{' '}
                <span className="pl-3 text-sm">Register with Google</span>{' '}
              </button>
              <p className="mb-5 text-[#8f8f8f]">----- or Register with Email -----</p>
              <form onSubmit={handleClick} method="POST" className="w-full">
                <input
                  type="text"
                  id="name"
                  required
                  ref={name}

                  aria-label="Enter your full name"
                  placeholder="Username"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
                />

                <input
                  type="email"
                  id="email"
                  required
                  ref={email}

                  aria-label="Enter your email address"
                  placeholder="Email Address"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
                />
                <div className="relative">
                  <input
                    aria-label="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"

                    placeholder="Password"
                    required
                    ref={password}
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded "
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
                  className={`bg-black mb-3 text-white w-full rounded h-8 font-bold`}
                >
                  Register
                </button>
                <Link to="/register1">Register1</Link>
              </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary">
              <p className="text-sm">
                Already have an account?
                {` `}
                <Link to="" className="underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />

    
    </div>
    </>
  );
};

export default SignUp;
