import React from 'react'
import { useNavigate } from 'react-router-dom'




export const Login = () => {

    const navigate = useNavigate()


    const handleLogin = () => {
        navigate('/home', {
            replace: true,
        });
    }



    return (
        <div className='container mt-5 p-8'>
            <h1>Login</h1>
            <hr />


            <div className='mt-10'>
                <button
                    onClick={handleLogin}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs 
                font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Login
                </button>

            </div>

        </div>
    )
}