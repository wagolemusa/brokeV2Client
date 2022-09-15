import React, { useState } from 'react'
import Side from './Side'
import axios from 'axios';
let token = localStorage.getItem('token');

const Post = () => {
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [postPictures, setPostPictures] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")


    const post = new FormData();
    post.append('email', email);
    post.append('title', title);
    post.append('country', country);
    post.append('city', city);
    post.append('price', price);
    post.append('description', description);
    for (let pic of postPictures) {
        post.append('postPictures', pic)
    }

    const handleImultImages = (e) => {
        setPostPictures([
            ...postPictures,
            e.target.files[0]
        ]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)
        const response = await axios.post('https://brokerback.herokuapp.com/api/post/shell', post, {
            headers: {
                'Authorization': token,
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .catch((err) => {
                console.log(err.response.data)
                if (err && err.response) setError(err.response.data.message);
                setSuccess(null);
            });
        if (response && response.data) {
            setError(null);
            setSuccess(response.data.message);
        }
        if (response.status === 201) {
            window.location.replace("/create")
        }
        if (response?.data?.errors) {
            const message = response.data.errors.map(item => item.msg)
            setError(message)
        }
    }


    return (
        <section className="sider flex pt-20">
            <Side />

            <div className="p-7 text-2xl font-semibold flex-1 h-screen">

                <div class="relative flex flex-col space-y-10 justify-center items-center">
                    {!error &&
                        <div className='suc'>
                            {success ? success : ""}
                        </div>}

                    {!success && Array.isArray(error) ? error.map((item, i) => (
                        <div class="notice bg-red-100 rounded-lg px-6 mb-4 text-base text-red-600" role="alert">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 key={i}> {item} </h4>
                        </div>
                    )) : <p className="rounded-lg px-6 mb-4 text-base text-yellow-600" role="alert">{error} </p>
                    }
                    <div class="cardpost md:shadow-lg shadow-none rounded p-6" >
                        <form class="space-y-5 mt-5" onSubmit={handleSubmit}>
                        <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                                <input id="title" class="w-full text-sm rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Customer Email" type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                                <input id="title" class="w-full text-sm rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Business Name" type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                            </div>
                            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                                <input id="country" class="w-full rounded text-sm px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Country" type="text"
                                    onChange={(e) => setCountry(e.target.value)}
                                />

                            </div>
                            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                                <input id="city" class="w-full text-sm rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="City" type="text"
                                    onChange={(e) => setCity(e.target.value)}
                                />

                            </div>
                            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                                <input id="price" class="w-full  text-sm rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Price" type="number"
                                    onChange={(e) => setPrice(e.target.value)}
                                />

                            </div>
                            <textarea class="w-full  text-sm px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" placeholder='Description' rows="4"
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            {
                                postPictures.length > 0 ?
                                    postPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                            }
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        " onChange={handleImultImages} />
                            </label>
                            <button type="submit" class="ext-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-3  p-3  text-sm font-medium">Post Shell</button>

                        </form>
                    </div>
                </div>
            </div></section>
    )
}

export default Post;