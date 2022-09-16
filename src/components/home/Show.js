import React, { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import axios from "axios";
import { SiBytedance } from "react-icons/si";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";
import { TbPhoneCheck } from "react-icons/tb";
import { BsAt } from "react-icons/bs";
import Footer from "../footer/Footer";
import Relatd from "../Related";
import Sold from "../Sold";
import { useLocation } from 'react-router'

const Show = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [showdata, setShowdata] = useState([]);

  const getdatabyid = () => {
    axios.get('https://brokerback.herokuapp.com/api/' + path)
      .then((res) => {
        const myPost = res.data.post;

        setShowdata(myPost);

      })
  }
  useEffect(() => getdatabyid(), [path]);


  const items = showdata.postPictures?.map(showpic =>
    <img src={showpic.img} class="block w-full"
      alt="Wild Landscape" />

  )

  // console.log(showdata)   

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4
    }
  }


  return (
    <>
      <div className='lg:container lg:mx-auto pb-10'>

        <div class="lg:grid lg:grid-cols-3 gap-4">
          <div class="col-span-2 ...">
            <div class="showimg col-span-2">


            <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                autoWidth={500}
                items={items}
           />

              <h5 class="text-4xl pl-4 font-semibold tracking-tight text-gray-900 pb-5 dark:text-white pt-3">{showdata.title}</h5>
              <p className="text-lg pl-4 font-bold text-gray-600 dark:text-white">
                {showdata.description}
              </p>
            </div>
          </div>

          <div>
            <div className='bg-slate-800 drop-shadow-lg'>
              <div class="text-white py-10 pr-11 pl-11">
                <button class="w-full text-center  bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-3 font-medium">BUY SHELL</button>
                <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-xl font-medium border-b border-gray-200 rounded-t-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                  <div className="icons w-2  h-2 mr-2 fill-current text-lg">
                    <AiOutlineDribbble />
                  </div>
                  {showdata.country}
                </div>
                <div class="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                  <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <SiBytedance />
                  </div>
                  {showdata.city}
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                  <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                    <TbPhoneCheck />
                  </div>

                  +244 725 690 642
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                  <div className="icons w-10  h-4 mr-2 fill-current text-lg">
                    <BsAt />
                  </div>
                  info@korgroups.africa
                </div>
                <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium rounded-b-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                  <div className="icons w-4  h-4 mr-2 fill-current text-sm">
                    <BsCheckLg />
                  </div>

                  Approved by Korgroups
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Relatd />
      <Sold />
      <Footer />
    </>
  )
}

export default Show;

