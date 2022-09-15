import React from 'react'

const Location  = ({formData, setFormData}) => {
    return(
        <div>
         <form class="space-y-5 mt-5">
            <div class="mb-4 relative">
                <input id="country" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" placeholder='Country' type="text" autofocus 
                          value={formData.country}
                          onChange={(event) => 
                              setFormData({...formData, country: event.target.value })
                          }
                />
            </div>
            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                <input id="city" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder='City' type="text"
                          value={formData.city}
                          onChange={(event) => 
                              setFormData({...formData, city: event.target.value })
                          }
                />
                
            </div>
            <div class="-m-2">
            </div>
        </form>
        </div>
    )
}

export default Location;





