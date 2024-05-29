import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api/api';
import { RiAdminFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";

const Settings = () => {
    const [users, setUsers] = useState([]);

    // Fetch existing users from the backend server
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            const sortedUsers = response.users.sort((a, b) => (a.role === 'admin' ? -1 : 1));
            setUsers(sortedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`/api/users/${userId}`);
            // After deletion, fetch updated list of users
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl'>Existing Users</h1>
                <span className='block border-t border-gray-400 mt-4'></span>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <div className="grid grid-cols-3 gap-4 mt-5 items-center">
                                <div className="flex justify-center">
                                    {user.role === "admin" ? (
                                        <RiAdminFill className={`${user.role === 'admin' ? 'text-yellow-500' : 'text-blue-500'} text-5xl`} /> // Color for admin
                                    ) : (
                                        <GrUserWorker className={`${user.role === 'admin' ? 'text-yellow-500' : 'text-blue-500'} text-5xl`} /> // Color for worker
                                    )}
                                </div>
                                <p className="text-center capitalize text-xl">
                                    {user.name} - <span className={`${user.role === 'admin' ? 'text-yellow-500' : 'text-blue-500'}`}>{user.role}</span>
                                </p>
                                <button className={`${user.role === 'admin' ? 'text-yellow-500' : 'text-blue-500'} hover:text-red-600`} onClick={() => deleteUser(user.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {/* Add a form or button to create new users */}
                <button>Create New User</button>
            </div>
        </div>
    );
};

export default Settings;
