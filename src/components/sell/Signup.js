import React from 'react'

const Signup = ({formData, setFormData}) => {
    return(
        <div>
      
      <form class="space-y-5 mt-5">
            <div class="mb-4 relative">
                <input id="firstname" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" type="text" placeholder='Firstname' autofocus 
                    value={formData.firstname}
                    onChange={(event) => 
                        setFormData({...formData, firstname: event.target.value })
                    }
                />
            </div>
            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                <input id="lastname" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder='Lastname' type="text"
                      value={formData.lastname}
                      onChange={(event) => 
                          setFormData({...formData, lastname: event.target.value })
                      }
                />
                
            </div>
            <div class="-m-2">
            </div>
        </form>
        </div>
    )
}

export default Signup;



