import React, { useState } from 'react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = ({ heading, handleBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleemailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login({ email, password });
            if (response.success) {
                if (response.role === 'admin') {
                    navigate('/dashboard');
                } else {
                    navigate('/carEntry');
                }
            } else {
                alert(response.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className='w-screen h-[80vh] grid place-content-center'>
            <div className="mx-auto p-6 bg-[#fcfcfc] rounded-lg shadow-lg w-[30vw]">
                <h2 className="text-2xl font-semibold mb-6 text-center capitalize">{heading} login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleemailChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                            placeholder={`Enter ${heading} email`}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                            placeholder={`Enter ${heading} password`}
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 font-semibold mb-4">Login</button>
                    <button type="button" className="w-full bg-gray-500 px-4 py-2 rounded hover:bg-gray-400 font-semibold" onClick={handleBack}>Back</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
