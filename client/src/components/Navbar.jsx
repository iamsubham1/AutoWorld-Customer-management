import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-[#151515] p-3 mt-5" >
            <div className=" mx-auto flex justify-between items-center">
                <h1 className='font-semibold text-yellow-500 cursor-pointer' onClick={() => navigate('/')}>AUTO WORLD</h1>
                <Link to="/adminLogin" className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">Admin Login</Link>
            </div>
        </nav>
    );
};

export default Navbar