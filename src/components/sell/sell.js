import React from 'react'
import '../../App.css'
import { DiGitMerge } from "react-icons/di";
import { IoIosGitCompare } from "react-icons/io";
import { IoIosContract } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoIosPulse } from "react-icons/io";

const Sell = () =>{

    return(
        <div>
            <div class="grid grid-cols-2 gap-2">
            <div className='bg-slate-800 drop-shadow-lg hidden md:block'>
              <div class="text-white py-20 pr-30 pl-20 pr-40 ">
                <div className="proStyle relative inline-flex items-center w-full px-8 py-8 text-xl font-medium border-b border-gray-200 rounded-t-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <DiGitMerge />
                    </div>
                    Petrol Stations
                </div>
                <div class="proStyle relative inline-flex items-center w-full px-8 py-8 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <IoIosGitCompare />
                    </div>
                    Companies
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-8 py-8 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <IoIosContract />
                    </div>                    
                    Shares
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-8 py-8 text-sm font-medium border-b border-gray-200  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <IoIosStats />
                    </div>
                    Business
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-8 py-8 text-sm font-medium rounded-b-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <IoIosPulse />
                    </div>

                    investors
                </div>
            </div>
              
              </div>
         
              <div>
            <form >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Firstname">
              Firstname
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Firstname" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
              Lastname
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Lastname" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="phone Number">
              Phone Number
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone Number" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
              country
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
              City
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*****************" />
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>

          </div>
        </form>

         </div>
            </div>
         
        </div>

       
    )
}

export default Sell;
