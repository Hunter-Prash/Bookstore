import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:4001/users/login', {
                email,
                password
            });

            alert('Login successful');
            console.log('Response:', response.data);

            // Store user information in localStorage
            if (response.data.user) {
                localStorage.setItem("User", JSON.stringify(response.data.user));
            }

            // Close the modal
            document.getElementById('my_modal_3').close();

            // Optionally, redirect the user or update the UI
            navigate('/'); // Redirect to home page, for example
            window.location.reload()
        } catch (error) {
            alert("Error logging in. Please check your credentials.");
            console.error('Error logging in:', error);
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                        <h3 className="font-bold text-lg mb-4">Login</h3>
                        <div className='flex gap-3 p-3 items-center'>
                            <h3>Email</h3>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email" 
                                className='p-2'
                                required
                            />
                        </div>

                        <div className='flex gap-3 p-3 items-center mr-7'>
                            <h3>Password</h3>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password" 
                                className='p-2'
                                required
                            />
                        </div>   

                        <div className='flex justify-around items-center m-2'>
                            <button type="submit" className="btn bg-pink-600 hover:bg-pink-600 scale-105 duration-150 text-white">Login</button>
                            <p>Not Registered? <Link to='/signup' className='text-pink-700'>Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;