import React, { useState, useRef } from "react";

import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    // const { dispatch } = useContext(Context);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        //   dispatch({ type: "LOGIN_START" });


        const response = await axios.post("https://brokerback.herokuapp.com/admin/api/login", {

            email: userRef.current.value,
            password: passwordRef.current.value,

        })

            .catch((err) => {
                console.log(err.response.data)
                if (err && err.response) setError(err.response.data.message);
                setSuccess("");
            });

        if (response && response.data) {

            setError("");
            setSuccess(response.data.message);
        }

        if (response.status === 201) {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.assign('/dashoard')
        } else {

            // window.location.replace("/login")
        }

        if (response?.data?.errors) {
            const messages = response.data.errors.map(item => item.msg)

            setError(messages)
        }
    };
    return (
        <div className="pt-20">
            <div class="pt-10 relative flex flex-col space-y-10 justify-center items-center">
                <div class="md:shadow-lg shadow-none rounded p-6 w-96" >
                    {!error &&
                        <div className='suc'>
                            {success ? success : ""}
                        </div>}

                    {!success && Array.isArray(error) ? error.map((item, i) => (
                        <div class="notice bg-red-100 rounded-lg py-2 px-6 mb-4 text-base text-red-600" role="alert">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 key={i}> {item} </h4>
                        </div>
                    )) : <p className="rounded-lg py-2 px-6 mb-4 text-base text-yellow-600" role="alert">{error} </p>
                    }
                    <h1 class="text-3xl font-bold leading-normal" >Sign in</h1>
                    <form class="space-y-5 mt-5" onSubmit={handleSubmit}>
                        <div class="mb-4 relative">
                            <input id="email" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" placeholder="Email" type="email" autofocus
                                ref={userRef}
                            />
                        </div>
                        <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                            <input id="password" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Password" type="password"
                                ref={passwordRef}
                            />

                        </div>
                        <div class="-m-2">
                        </div>
                        <button type="submit" class="w-full text-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-3 font-medium">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;


