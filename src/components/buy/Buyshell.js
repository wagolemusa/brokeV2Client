import React, {useState} from 'react'
import Signup from './Signup';
import Location from './Location';
import Personal from './Personal';
import Footer from '../footer/Footer';
import axios from 'axios';


function Buyshell() {
    const [page, setPage]  = useState(0);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        city: "",
    });
    // post data in database
    
    const handleSubmit = async () => {
        setError(null)
        const response = await axios.post('https://brokerback.herokuapp.com/api/buyer', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .catch((err) => {
            console.log(err.response.data)
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
        });
        if(response && response.data){
            setError(null);
            setSuccess(response.data.message);
        }
        if(response.status === 201){
            window.location.replace("/")
        }
        if(response?.data?.errors){
            const message = response.data.errors.map(item => item.msg)
            setError(message)
        }
    }

    const  FormTitle = ["Let us know you!", "Provide Business Active Contacts", "Let us know where you come from!"];
        const PageDisplay = () => {
            if(page == 0){
                return <Signup formData={formData} setFormData={setFormData}/>;
            }else if (page == 1){
                return <Personal formData={formData} setFormData={setFormData}/>;
            }else {
                return <Location formData={formData} setFormData={setFormData}/>;
            }
        }
    return (
        <>
       <section className='pt-5 pb-32'>
           <div class="pt-10 relative flex flex-col space-y-10 justify-center items-center">
            
                <div class="md:shadow-lg shadow-none rounded p-6 w-96 bg-white" >
                <h1 className='text-slate-500 font-semibold'>{FormTitle[page]}</h1>
                
                        {PageDisplay()}
                 
                        <div className='footer'>
                        <button className="bg-white hover:bg-gray-100 text-slate-500 font-semibold py-1 px-4 border rounded-full border-teal-400  shadow"
                                disabled={page == 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Prev
                        </button>
                 
                        <button className="bg-white float-right hover:bg-gray-100 text-slate-500 font-semibold py-1 px-4 border rounded-full border-teal-400  shadow"
                           
                                onClick={() => {
                                    if(page === FormTitle.length -1){
                                    
                                        handleSubmit(formData)

                                    }else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                    
                                }}
                            >
                                {page == FormTitle.length - 1 ? "Submit" : "Next"}
                        </button>
                        </div>
                </div>
            </div>
       </section>
        <Footer/>
       </>
    )
}

export default Buyshell;



