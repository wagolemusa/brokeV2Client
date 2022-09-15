import React, { useState, useEffect } from "react";
import Side from "./Side";
import axios from "axios";

let token = localStorage.getItem('token')

const Getbuyer = () => {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);

    const [buyer, setBuyer] = useState([]);

    const getbuyer = () => {
        axios.get('https://brokerback.herokuapp.com/api/buyer', {
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setFirstname(res.data.buy)
                setLastname(res.data.buy)
                setEmail(res.data.buy)
                setPhone(res.data.buy)
                setCountry(res.data.buy)
                setCity(res.data.buy)
                setCreatedAt(res.data.buy)

                const mybuyer = res.data.buy;
                setBuyer(mybuyer);

            })
    }
    useEffect(() => getbuyer(), []);
    console.log(buyer);

    return (
        <section className="sider flex pt-20">
            <Side />

            <div className="p-7 text-2xl font-semibold flex-1 h-screen">


                <div class="scoll overflow-x-auto relative shadow-md sm:rounded-lg overflow-y-auto h-82">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                          
                                <th scope="col" class="py-3 px-6">
                                    Firstname
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <div class="flex items-center">
                                        Lastname
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <div class="flex items-center">
                                        Phone
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <div class="flex items-center">
                                        Email
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
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
                                        Date
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {buyer.firstname}
                            {

                            buyer.map((buys) => {
                                    return (

                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={buys._id}>

                                 
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {buys.buyers.firstname}
                                            </th>
                                            <td class="py-4 px-6">
                                                {buys.buyers.lastname}
                                            </td>
                                            <td class="py-4 px-6">
                                                {buys.buyers.phone}
                                            </td>
                                            <td class="py-4 px-6">
                                                {buys.buyers.email}
                                            </td>
                                            <td class="py-4 px-6">
                                                {buys.buyers.country}
                                            </td>
                                            <td class="py-4 px-6">
                                                {buys.buyers.city}
                                            </td>
                                            <td class="py-4 px-6">
                                                
                                                 {new Date(buys.createdAt).toDateString()}
                                            </td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    )
}

export default Getbuyer;