import React, { useState, useEffect } from "react";
import axios from 'axios'

import Footer from "../footer/Footer"
import Cards from "../Cards";
import Trust from "./Trust";
import x from '../../asserts/x.png'
import xx from '../../asserts/xx.png'
import xc from '../../asserts/xc.png'

let token = localStorage.getItem('token')

const Home = () => {
    const [getcoutry, setGetcoutry] = useState([])

    // const [search,  setSearch] = useState([]);

    // const [error, setError] = useState("")
    // const [success, setSuccess] = useState("");
    const [country, setCountry] = useState("");
    const [city,  setCity] = useState("");

    const getcoutrydata = () =>{
      axios.get('https://brokerback.herokuapp.com/api/country', {
        headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          const myseller = res.data.post;
          setGetcoutry(myseller);

        })
    }
    useEffect(() => getcoutrydata(), []);
    // console.log(getcoutry);


    const formData = {
      country,
      city,
    }
    


  // post data in database
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await axios.post('https://brokerback.herokuapp.com/api/search', formData, {
        headers: {
          'Authorization': token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })

      // console.log(response.data)
      .catch((err) => {
          console.log(err.response.data)
      // if (err && err.response) setError(err.response.data.message);
      // setSuccess(null);
      });
      const mysearch = response.data.post;

      // setSearch(mysearch)

      console.log(mysearch)
  }


  // function getsearchData () {
  //   return(
  //           <>
  //             {
  //               search?.map((home) => {
  //                   return(
  //                       <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  //                       <Link to={`/show/${home._id}`}>
  //                           <img src={home.postPictures[0].img} class="p-2 rounded-t-lg" alt="product image" />
  //                       </Link>
  //                       <div class="px-5 pb-5">
  //                       <Link to={`/show/${home._id}`}>
  //                               <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">{home.title}</h5>
  //                       </Link>
  //                           <div class="flex items-center mt-2.5 mb-5">
  //                               <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  //                               <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  //                               <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  //                               <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  //                               <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  //                               <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
  //                           </div>
  //                           <div class="flex justify-between items-center">
 
  //                           <Link to={`/show/${home._id}`}class="text-1xl font-bold text-gray-500 dark:text-white"> Approved</Link>
  //                               <Buy/>
  //                           </div>
  //                       </div>
  //                   </div>
  //                   )
  //               })
  //           }
  //     </>
  //   )
  // }



  const styles =  {
    secdev: `text-center`,
    secdevTitle: `text-2xl pb-4 pt-5 font-extrabold`,
    secdevText: `text-sm font-bold text-gray-600 dark:text-white`
  }

    return(
      <section>
        <section className="homesection pt-11 text-white font-sans font-bold bg-slate-900">
            <div className="pt-11 pb-20">

            <h1
              className="text-5xl lg:text-2  md:mb-0 mb-8 lg:leading-normal font-extrabold 
                 text-center"
              >
              <span className="text-teal-400">Korgroups</span> Business Brokers
            </h1>
            <p className="text-center pt-2 text-2xl">Sell / Buy petrol stations with Korgroups brokers</p>
            </div>
           
      </section>

      <section className="homecard md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center h-full pl-10 sm:pl-0">
          <div class="md:shadow-lg p-6 w-92 bg-white rounded-lg shadow-md" >
              <h1 class="text-2xl font-bold leading-normal text-center ">Sell Petrol Stations</h1>
              <form class="space-y-5 mt-5" onSubmit={handleSubmit}>
                  <div class="mb-4 relative">
                  <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   onChange={(e) => setCountry(e.target.value)}
                  >
                  <option value="DE">select Country</option>
                  { getcoutry?.map((coutry) => {
                    return(
                     
                    <option>{coutry.country}</option>
                    )
                  })
                 
                  }
                  </select>
                  </div>
                  <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                  <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCity(e.target.value)}
                  >
                  <option value="DE">select City</option>
                  { getcoutry?.map((coutry) => {
                    return(
                     
                    <option>{coutry.city}</option>
                    )
                  })
                 
                  }
                  </select>
                  </div>

                  <button type="submit" class="w-full text-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-2 font-medium">Sell New</button>
              </form>
          </div>
          
          </div>
    </section>

<section>
  <h2 className="hometitle text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">Sell your Petrol Stations in 3 Steps</h2>
  <div className='lg:container lg:mx-auto sm:p-20'>
  <div className='lg:grid grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8'>

        <div className="text-center">
        <div className="imgcard">
        <div className={styles.secdev}>
          <center>
          <img src={x}  alt="" />
          </center>
          
        </div>
        <h2 className={styles.secdevTitle}>1.Click on Sell </h2>
        <p className={styles.secdevText}>Complate the signup process and post your petrol station, Korgroups will approve with you</p>
      </div>
      </div>
      <div className={styles.secdev}>

      <div className="imgcard">
          <center>
          <img src={xx} alt="" />
          </center>
        </div>
        <h1 className={styles.secdevTitle}>2.Connect</h1>
        <p className={styles.secdevText}>Connect with Korgroups and the buyer  for the negosetion</p>
      </div>
      <div className={styles.secdev}>
      <div className="imgcard">
        <center>
        <img src={xc}  alt="" />
        </center>
        </div>
        <h1 className={styles.secdevTitle}>3.Close Deal</h1>
        <p className={styles.secdevText}>Handle Docements to the buyer  and get payed with the help of our loyers</p>
      </div>
  </div>
  </div>

</section>

      

      {/* { <Cards /> ?  getsearchData() : <Cards />}    */}


        <Cards />
      <Trust/>
        <Footer/>
      </section>
    
     
    )
}

export default Home;
