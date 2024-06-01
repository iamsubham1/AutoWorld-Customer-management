import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateUserModal = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleCreateUser = () => {
        // Implement user creation logic here
        console.log('Creating user:', { name, email, password, isAdmin });
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Create User Modal"
            className="Modal"
            overlayClassName="Overlay"
        >
            <h2>Create New User</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
                    Admin
                </label>
            </div>
            <button onClick={handleCreateUser}>Create User</button>
            <button onClick={closeModal}>Cancel</button>
        </Modal>
    );
};

export default CreateUserModal;
