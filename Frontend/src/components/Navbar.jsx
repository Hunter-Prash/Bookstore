import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
    
  const [authUser,setAuthUser]=useAuth()

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
    }
    else{
      setSticky(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return ()=>{
    window.removeEventListener('scroll',handleScroll)
    }
  },[])

    const navItems=(
        <>
                            <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/course">Course</Link>
                </li>
                <li>
                    <a>Contact</a>
                </li>
                <li>
                    <a>About</a>
                </li>
        </>
    )

  return (
    <>
      <div className={`max-w-screen 2xl container mx-auto md:px-20 px-4 z-10 fixed top-0 left-0 right-0 ${sticky ? 'bg-base-100 shadow-md' : ''}`}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
               {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BookStore</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navItems}
            </ul>
          </div>
          
          
          {
            authUser ? <Logout /> : 
                  <div>
                    <a className="btn ml-4 hover:bg-pink-600 scale-105 duration-150 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a>
                    {/* importing the login component over here and using it*/}
                    <Login />

                  </div>
          }

        </div>
      </div>
    </>
  );
}

export default Navbar;
