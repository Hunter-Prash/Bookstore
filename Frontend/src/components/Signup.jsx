import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the form from refreshing the page
        
        try {
            //SENDING THE FORM DATA TO BACKEND
            const response = await axios.post('http://localhost:4001/users/signup', {
                fullname,
                email,
                password
            });
            alert('Singup successful')
            console.log('Response:', response.data); // Logs the response from the server


            localStorage.setItem("User",JSON.stringify(response.data.user))//JSON.stringify is a JavaScript method that converts a JavaScript object or value to a JSON string. It is necessary because localStorage can only store strings, not complex objects.

        } catch (error) {
            alert("error signining up ...check console")
            console.error('Error signing up:', error);
            console.log(error.response.data.message)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} method='post'>
                <div className="max-w-md mx-auto mt-10 bg-gray-900 p-8 border border-gray-300 rounded-lg shadow-md relative">

                    <Link to='/'>
                        <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                            X
                        </button>
                    </Link>

                    <h2 className="text-lg font-bold mb-4 text-white">Sign Up</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-white" htmlFor="fullname">Full Name</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                            id="fullname" 
                            type="text" 
                            placeholder="Full Name" 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-white" htmlFor="email">Email</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-white" htmlFor="password">Password</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>

                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            Already have an account?
                        </a>

                        {/* Importing the login component here */}
                        <Login />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signup;
