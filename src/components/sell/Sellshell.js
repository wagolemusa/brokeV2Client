import React, {useState} from 'react'
import Signup from './Signup';
import Location from './Location';
import Personal from './Personal';
import Footer from '../footer/Footer';
import axios from 'axios';


function Sellshell() {

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

        const response = await axios.post('https://brokerback.herokuapp.com/api/seller', formData, {
            headers: {
                'Authorization': '',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
            window.location.replace("/about")
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
       <section className='pt-1'>
           <div class="relative flex flex-col space-y-10 justify-center items-center">
            
                <div class="md:shadow-lg shadow-none rounded p-6 w-96 bg-white" >
                <h1 className='text-slate-500 font-semibold'>{FormTitle[page]}</h1>
                        {PageDisplay()}
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
                                        // window.location.replace("/about")

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
       
       </>
    )
}

export default Sellshell;



