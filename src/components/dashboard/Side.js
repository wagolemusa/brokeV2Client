import React, { useState } from "react";

import r from '../../asserts/r.png';
import { Link } from "react-router-dom";

import { FcNegativeDynamic } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";

const Side = () => {
    const [open, setOpen] = useState(true)

    return(
        <div>
            <div className={`${open ? "w-72" : "w-20"} duration-500 h-screen bg-slate-100`}>
            
            <img src={r} classNaame="absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple ${!open }
            border-2 rounded-full pr-11" onClick={() => setOpen(!open)} alt="" />
            <ul className={`pt-8 `}>

            <li className="text-xl font-semibold flex items-center gap-x-4 cursor p-5 hover:bg-teal-300  hover:text-white rounded-md">
            <Link to="/buyers">
            <FcNegativeDynamic className="w-7" />
            </Link>
              <Link to="/buyers" className={`${!open && 'hidden'} origin-left duralation-200`}>Buyers
                </Link>
              </li>

              <li className="text-xl font-semibold flex items-center gap-x-4 cursor p-5 hover:bg-teal-300 hover:text-white rounded-md">
              <Link to="/sellers">
                <FcMindMap  className="w-7"/>
              </Link>  
              <Link to="/sellers"  className={`${!open && 'hidden'} origin-left duralation-200`}>Sellers</Link>
              </li>
              <li className="text-xl font-semibold flex items-center gap-x-4 cursor p-5 hover:bg-teal-300 hover:text-white rounded-md">
              <Link to="/create">
                <FcTimeline  className="w-7"/>
              </Link>  
              <Link to="/create"  className={`${!open && 'hidden'} origin-left duralation-200`}>Shells</Link>
              </li>
            </ul>
          
          </div>
        </div>
    )
}

export default Side;

