import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getCookie, isAdmin } from '../utility/getCookie';

const Navbar = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleLogout = () => {
        // Remove the JWT and role cookies
        cookies.remove('JWT');
        cookies.remove('role');
        // Redirect to the login page or any other desired route
        navigate('/');
    };

    const isAuthenticated = getCookie('JWT');

    return (
        <nav className="bg-[#151515] p-3 mt-5">
            <div className="mx-auto flex justify-between items-center">
                <h1 className='font-semibold text-yellow-500 cursor-pointer' onClick={() => navigate('/')}>
                    AUTO WORLD
                </h1>
                {/* <Link to="/adminLogin" className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">Admin Login</Link> */}
                <div>
                    {isAuthenticated && (
                        isAdmin() ? (
                            <>
                                <button
                                    className="text-white capitalize px-4 py-2 rounded hover:text-yellow-400 mr-5"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </button>
                                <button
                                    className="text-white capitalize px-4 py-2 rounded hover:text-yellow-400 mr-5"
                                    onClick={() => navigate('/carEntry')}
                                >
                                    Car Entry
                                </button>
                                <button
                                    className="text-black font-semibold bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                className="text-black font-semibold bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        )
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;