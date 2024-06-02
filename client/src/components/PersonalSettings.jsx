import React, { useState, useEffect } from 'react';

const PersonalSettings = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch user's data (dummy data for now)
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        // Dummy data fetching
        const userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };
        setUser(userData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Dummy data submission
        console.log('User data updated:', user);
        setIsEditing(false);
        fetchUserData();
    };

    return (
        <div className=' w-[50%] '>
            <h1 className='text-center text-3xl text-yellow-400 font-medium'>Account Info</h1>
            <div className='mt-6 font-medium'>
                <div className='mb-4'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 py-2 px-1 rounded-md text-black"
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-1 shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm py-2 px-1 sm:text-sm border-gray-300 rounded-md text-black"
                    />
                </div>
                {isEditing ? (
                    <div className='flex justify-end'>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="ml-4 px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div className='flex justify-end'>
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalSettings;
