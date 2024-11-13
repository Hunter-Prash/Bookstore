import React from 'react'
import { useAuth } from "../context/AuthProvider";

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('User')
            alert("logout sucess")
            window.location.reload()

        } catch(err){
            console.error(err)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-lg cursor-pointer ml-10' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
