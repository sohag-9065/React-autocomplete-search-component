import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();




    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        navigate('/login')
        console.log(email, password);
    }
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-3xl text-center mb-12'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                <input className='h-12 w-80 p-4 ' type="text" name="text" id="text" placeholder='Enter Name' />
                <input className='h-12 w-80 p-4 ' type="email" name="email" id="email" placeholder='Email' />
                <input className='h-12 w-80 p-4 ' type="password" name="password" id="password" placeholder='Password' />
                <p>
                    <span className='label-text-alt pr-2'>Already have an account?</span>
                    <Link to="/login" className="label-text-alt">Please Login.</Link>
                </p>
                <button className='rounded text-2xl bg-slate-400 w-full p-2' type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;