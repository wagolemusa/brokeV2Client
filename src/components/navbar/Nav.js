import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import log from "../../../src/asserts/log.png"
import Sellshell from "../sell/Sellshell";
import { useDispatch, useSelector } from 'react-redux'
const Nav = () => {
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.clear();
    window.location.replace('/');
  }

  const renderLoginLinks = () => {
    return(
      <span button class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={logout}>
      Logout
    </span>
    )
  }

  const renderNonLoggedLinks = () => {
    return(
      <>
        <a href="/login" className="text-white pt-10  font-extrabold text-sm">
           Login
        </a> 
      </>
      
    )
  }

  const renderButton = () => {
    return(
      <Button />
    )
  }
  return (
    <div>
  <section className="justify-between items-center">
    <div className="bg-gray-800 h-14">
     
     <ul className="flex">
      <li className="care text-white pt-3 pl-10 font-extrabold text-sm">Customer Care  +254 725 696 042</li>
     <div className="login">
   
    <li> 
    {auth.authenticate ?  '': renderNonLoggedLinks()}

    </li>
  

     </div>
     </ul>
    </div>
  </section>
<nav class="w-full flex flex-wrap items-center justify-between py-4 bg-white
    text-black hover:gray-900 focus:text-white shadow-lg
    navbar navbar-expand-lg navbar-light">
  <div class="container-fluid w-full flex flex-wrap  justify-between px-6">
  <button class="navbar-toggler
     bg-gray-900 
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <Link to="/" >
          <img src={log} alt="logo" className="md:cursor-pointer h-9" />
    </Link>
  <ul class="navbar-nav font-extrabold flex flex-col lg:pl-32  md:pl-0 mr-auto md:flex text-gray-900 uppercase sm:text-sm sm:gap-2 font-[Poppins]">
   
    <li class="nav-item p-2">
 
    <Link to="/">
          HOME
      </Link>
    </li>
    <li class="nav-item p-2">
      <Link to="/about">
        ABOUT US
      </Link>
    </li>
    <li class="nav-item p-2">
    <Link to="/buy">
            BUY A BUSINESS
      </Link>
    </li>
    <li className="nav-item p-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen1">
          SELL A BUSINESS
      </li>
  </ul>
  </div>

  <div class="flex items-center relative">

  {auth.authenticate ?  renderLoginLinks() : renderButton()}
     

  </div>
  </div>
</nav>

<div class="shadow bg-body rounded modal fade fixed top-0 lg:right-0 hidden lg:w-1/3 h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalFullscreen1" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
             
              <button type="button"
                  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">
                  Close
                </button>
            </div>
            <h5 className="sell text-slate-500 text-center" id="exampleModalFullscreenLabel">
                Korgroups blockers connects you with a good Buyer.
              </h5>

              <Sellshell/>

              

           
          </div>
        </div>
      </div>
    </div>
    )
}

export default Nav
