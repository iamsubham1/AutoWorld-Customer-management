import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [users, setUsers] = useState([]);

    // Fetch existing users from the backend server
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
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
            <h2 className="text-xl font-semibold">Settings</h2>
            <div>
                <h3>Existing Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
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
