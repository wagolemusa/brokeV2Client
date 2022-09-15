import React from "react";

const Personal = ({formData, setFormData}) => {
    return (
        <div>
        <form class="space-y-5 mt-5">
            <div class="mb-4 relative">
                <input id="email" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" type="text" placeholder="Email" autofocus 
                      value={formData.email}
                      onChange={(event) => 
                          setFormData({...formData, email: event.target.value })
                      }
                />
            </div>
            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                <input id="phone" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" placeholder="Phone Number" type="number"
                          value={formData.phone}
                          onChange={(event) => 
                              setFormData({...formData, phone: event.target.value })
                          }
                />
                
            </div>
            <div class="-m-2">
            </div>
        </form>
        </div>
    )
}

export default Personal;