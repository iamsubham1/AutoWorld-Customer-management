import React from 'react';
import danger from '../assets/danger.png'
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/carEntry');

    };

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] bg-[#353535] text-white">
            <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
            <p className="text-lg mb-8">You are not authorized to view this page. Access denied!</p>
            <img src={danger} alt="Danger" className="w-64 h-64 rounded-full shadow-lg mb-8" />
            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogout} // Add onClick event to call handleLogout function
            >
                Go Back to Safety
            </button>
        </div>
    );
};

export default UnauthorizedPage;
