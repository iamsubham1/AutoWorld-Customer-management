import React, { useState } from 'react';
import AccountManagement from './AccountManagement';
import PersonalSettings from './PersonalSettings';

const Settings = () => {
    const [currentView, setCurrentView] = useState('personal-settings');

    const renderView = () => {
        switch (currentView) {
            case 'personal-settings':
                return <PersonalSettings />;
            case 'account-management':
                return <AccountManagement />;
            default:
                return <PersonalSettings />;
        }
    };

    return (
        <div className='mt-10 flex flex-col items-center justify-center min-h-[50vh]'>
            <nav className='flex justify-center mb-4'>
                <ul className='flex space-x-4'>
                    <li
                        className={`px-4 py-2 cursor-pointer ${currentView === 'personal-settings' ? 'text-yellow-400' : 'text-white hover:text-[#7a7a7a]'}`}
                        onClick={() => setCurrentView('personal-settings')}
                    >
                        Personal Settings
                    </li>
                    <li
                        className={`px-4 py-2 cursor-pointer ${currentView === 'account-management' ? 'text-yellow-400' : 'text-white hover:text-[#7a7a7a]'}`}
                        onClick={() => setCurrentView('account-management')}
                    >
                        Account Management
                    </li>
                </ul>
            </nav>
            <div className='flex w-full max-w-4xl bg-[#1212123a] rounded-md p-6 justify-center items-center'>
                {renderView()}
            </div>
        </div>
    );
};

export default Settings;
