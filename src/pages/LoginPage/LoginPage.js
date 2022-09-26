import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        navigate('/home')
        console.log(email, password);
    }

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-3xl text-center mb-12'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                
                <input className='h-12 w-80 p-4 border' type="email" name="email" id="email" placeholder='Email' />
                <input className='h-12 w-80 p-4 border' type="password" name="password" id="password" placeholder='Password' />
                <p>
                    <span className='label-text-alt pr-2'>New here?</span>
                    <Link to="/signup" className="label-text-alt">Please Sign Up.</Link>
                </p>
                <button className='rounded text-2xl bg-slate-400 w-full p-2' type="submit">login</button>
            </form>
        </div>
    );
};

export default LoginPage;