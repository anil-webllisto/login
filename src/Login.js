import React, { useRef } from 'react';
import './App.css';

const Login = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  function handleclick(e) {
    e.preventDefault();
    console.warn('this is useREf', inputRef.current.value);
    console.warn('this is useREf', inputRef2.current.value);
  }
  return (
    <>
      <div class='container'>
        <div class='title'>Login</div>
        <div class='content'>
          <form action='#'>
            <div class='user-details'>
              <div class='input-box'>
                <span class='details'>Full Name</span>
                <input type='text' ref={inputRef} placeholder='Enter your name' required />
              </div>
              <div class='input-box'>
                <span class='details'>Username</span>
                <input type='text' ref={inputRef2} placeholder='Enter your username' required />
              </div>
              <div class='input-box'>
                <span class='details'>Email</span>
                <input type='text' placeholder='Enter your email' required />
              </div>
              <div class='input-box'>
                <span class='details'>Phone Number</span>
                <input type='text' placeholder='Enter your number' required />
              </div>
              <div class='input-box'>
                <span class='details'>Password</span>
                <input type='text' placeholder='Enter your password' required />
              </div>
              <div class='input-box'>
                <span class='details'>Confirm Password</span>
                <input type='text' placeholder='Confirm your password' required />
              </div>
            </div>

            <div class='button'>
              <input type='submit' value='Register' onClick={handleclick} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
