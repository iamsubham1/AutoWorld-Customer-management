import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { username, password });
    };

    return (
        <div className='w-screen h-[80vh] grid place-content-center'>
            <div className="mx-auto p-6 bg-white rounded-lg shadow-lg w-[30vw]">
                <h2 className="text-2xl font-semibold mb-6 text-center ">ADMIN LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                            placeholder='Enter admin username'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                            placeholder='Enter admin password'

                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 font-semibold">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
