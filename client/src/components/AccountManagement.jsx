import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api/api';
import { RiAdminFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";

const AccountManagement = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'worker'
    });

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
            console.log('Deleting user with ID:', userId);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('New user:', newUser);
        closeModal();
    };

    return (
        <div className='mt-10'>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-center text-3xl text-yellow-400 font-medium'></h1>
                    <button className='mr-10 px-3 bg-yellow-400 text-black font-semibold py-1 rounded' onClick={openModal}>Create New User</button>
                </div>
                <span className='block border-t border-gray-400 mt-4'></span>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <div className="grid grid-cols-3 gap-4 mt-5 items-center">
                                <div className="flex justify-center">
                                    {user.role === "admin" ? (
                                        <RiAdminFill className="text-5xl text-yellow-500" />
                                    ) : (
                                        <GrUserWorker className="text-5xl text-blue-500" />
                                    )}
                                </div>
                                <p className="text-center capitalize text-xl">
                                    {user.name} - <span className={`${user.role === 'admin' ? 'text-yellow-500' : 'text-blue-500'}`}>{user.role}</span>
                                </p>
                                <button className="text-red-800 font-medium hover:text-red-600" onClick={() => deleteUser(user.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium text-gray-900 mb-6" id="modal-title">Create New User</h3>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <input type="text" name="name" id="name" autoComplete="name" value={newUser.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="email" name="email" id="email" autoComplete="email" value={newUser.email} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                                <input type="password" name="password" id="password" autoComplete="password" value={newUser.password} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input id="role" name="role" type="checkbox" checked={newUser.role === 'admin'} onChange={() => setNewUser(prevState => ({ ...prevState, role: prevState.role === 'admin' ? 'worker' : 'admin' }))} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="role" className="font-medium text-gray-700">Admin</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Create User
                                    </button>
                                    <button type="button" onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountManagement;
