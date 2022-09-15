import React, { useEffect, useState } from "react";
import axios from "axios";
import Side from "./Side";
let token = localStorage.getItem('token')

function Create() {

  const [image, setImage] = useState({})
  const[ currentData , setCurrentData] = useState({})
  const [postdata, setPostdata] = useState([]);

  const creatPost = () => {
    axios.get('https://brokerback.herokuapp.com/api/post', {

      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const myPost = res.data.post;
  
        setPostdata(myPost);

      })
  }
  useEffect(() => creatPost(), []);

  // console.log(postdata);

  return (
    <section className="sider flex pt-20">
      <Side />

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      <div class="scoll overflow-x-auto relative shadow-md sm:rounded-lg">
     
        <a href="/post" button class="bg-teal-400 float-right hover:bg-teal-500 duration-300 text-white font-bold py-2 px-4 rounded">
          Create Shell
        </a>
    
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Title
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    Country
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    City
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    Price
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    Date
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {

                postdata?.map((printPost) => {
                  return (

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700
                        nav-item p-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen2
                    "onClick={() => {
                      setCurrentData(printPost)
                      return (postdata)}
                    }  key={printPost._id}>

                      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {printPost.title}
                      </th>
                      <td class="py-4 px-6">
                        {printPost.country}
                      </td>
                      <td class="py-4 px-6">
                        {printPost.city}
                      </td>
                      <td class="py-4 px-6">
                        {printPost.price}
                      </td>

                      <td class="py-4 px-6">
                      {new Date(printPost.createdAt).toDateString()}
                      </td>
                    </tr>
                  )
                })
              }
 

            </tbody>

          </table>

        </div>

    
       <div class="shadow bg-body rounded modal fade fixed top-0 lg:right-0 hidden lg:w-1/3 h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalFullscreen2" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
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
            <div className="p-11">
            <div className="text-lg "><span className="text-sm text-gray-500 font-extrabold">Business Owner Email</span>  {currentData.email}</div> 
              <hr/>
              <div className="text-lg pt-2 text-gray-500"><span className="text-sm font-extrabold">Title:</span>  {currentData.title}</div> 
              <hr/>
              <div className="text-lg pt-2 text-gray-500"><span className="text-sm font-extrabold">Country:</span>   {currentData.country}</div>
              <hr/>
               <div className="text-lg pt-2 text-gray-500"><span className="text-sm font-extrabold">City:</span>   {currentData.city}</div>
               <hr/>
               <div className="text-lg pt-2 text-gray-500"><span className="text-sm font-extrabold">Price:</span>    {currentData.price}</div>

              <hr/>
                <div className="text-lg pt-2 text-gray-500 font-extrabold">Description</div>
               <div className="text-sm text-gray-500">{currentData.description}</div>

               {currentData.postPictures?.map(picture => 
                    
                    <div className="showimage">
                      <hr/>
                      <img src={picture.img} className="w-9 h-9 pt-2" />
                    </div>    
                  )}
              
            </div>
            



           
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Create;
