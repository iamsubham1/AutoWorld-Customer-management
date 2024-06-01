import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, isAdmin } from '../utility/getCookie';
import AllEntries from '../components/AllEntires';
import Settings from '../components/Settings';
import Reports from '../components/Reports';
import { getAllEntries } from '../api/api';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const sampleData = [
    {
        customerName: "David Lee",
        phoneNumber: "0123456789",
        carBrand: "Volkswagen",
        carModel: "Golf 2024 model",
        regdNo: "TN456UVW",
        service: "detailing",
        serviceCharge: 850,
        createdAt: new Date('2024-04-05T10:00:00Z'),
    },
    {
        customerName: "Emily Wilson",
        phoneNumber: "9876543210",
        carBrand: "Audi",
        carModel: "A4 2024 model",
        regdNo: "MA321NOP",
        service: "others",
        serviceCharge: 700,
        createdAt: new Date('2024-03-30T10:00:00Z'),
    },
    {
        customerName: "Jane Smith",
        phoneNumber: "9876543210",
        carBrand: "Ford",
        carModel: "Mustang 2023 model",
        regdNo: "LA456XYZ",
        service: "others",
        serviceCharge: 600,
        createdAt: new Date('2024-02-25T10:00:00Z'),
    },
    {
        customerName: "Chris Evans",
        phoneNumber: "0123456789",
        carBrand: "Mercedes-Benz",
        carModel: "E-Class 2024 model",
        regdNo: "FL123QWE",
        service: "washing",
        serviceCharge: 350,
        createdAt: new Date('2023-10-10T10:00:00Z'),
    },
    {
        customerName: "Sarah Jones",
        phoneNumber: "9876543210",
        carBrand: "Lexus",
        carModel: "RX 2023 model",
        regdNo: "OH789RST",
        service: "repair",
        serviceCharge: 1300,
        createdAt: new Date('2023-11-25T10:00:00Z'),
    },
    {
        customerName: "James Johnson",
        phoneNumber: "0123456789",
        carBrand: "Nissan",
        carModel: "Altima 2023 model",
        regdNo: "SC123ABC",
        service: "washing",
        serviceCharge: 400,
        createdAt: new Date('2023-08-20T10:00:00Z'),
    },
    {
        customerName: "Linda Brown",
        phoneNumber: "9876543210",
        carBrand: "Tesla",
        carModel: "Model 3 2023 model",
        regdNo: "PA987XYZ",
        service: "others",
        serviceCharge: 500,
        createdAt: new Date('2023-12-15T10:00:00Z'),
    },
    {
        customerName: "Michael Brown",
        phoneNumber: "0123456789",
        carBrand: "BMW",
        carModel: "X5 2023 model",
        regdNo: "GA654JKL",
        service: "detailing",
        serviceCharge: 900,
        createdAt: new Date('2023-07-20T10:00:00Z'),
    },
    {
        customerName: "Bob Smith",
        phoneNumber: "9876543210",
        carBrand: "Honda",
        carModel: "Accord 2023 model",
        regdNo: "CA987GHI",
        service: "repair",
        serviceCharge: 1200,
        createdAt: new Date('2023-09-15T10:00:00Z'),
    },
    {
        customerName: "Alice Johnson",
        phoneNumber: "0123456789",
        carBrand: "Chevrolet",
        carModel: "Camaro 2024 model",
        regdNo: "TX789DEF",
        service: "washing",
        serviceCharge: 400,
        createdAt: new Date('2023-08-05T10:00:00Z'),
    },
    {
        customerName: "John Doe",
        phoneNumber: "0123456789",
        carBrand: "Toyota",
        carModel: "Corolla 2022 model",
        regdNo: "NY123ABC",
        service: "detailing",
        serviceCharge: 800,
        createdAt: new Date('2024-01-10T10:00:00Z'),
    },
    {
        customerName: "Amit Kumar",
        phoneNumber: "09876543210",
        carBrand: "Hyundai",
        carModel: "i20 2019 model",
        regdNo: "DL8CAF1234",
        service: "repair",
        serviceCharge: 1500,
        createdAt: new Date('2023-06-15T10:00:00Z'),
    },
    {
        customerName: "Subham Das",
        phoneNumber: "09078133097",
        carBrand: "Maruti Suzuki",
        carModel: "Brezza 2020 model",
        regdNo: "OD07AG8824",
        service: "washing",
        serviceCharge: 450,
        createdAt: new Date('2023-05-20T10:00:00Z'),
    },
    {
        customerName: "James Johnson",
        phoneNumber: "0123456789",
        carBrand: "Nissan",
        carModel: "Altima 2023 model",
        regdNo: "SC123ABC",
        service: "detailing",
        serviceCharge: 400,
        createdAt: new Date('2023-08-20T10:00:00Z'),
    }
];

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [currentView, setCurrentView] = useState('all-entries');
    const [entries, setEntries] = useState(sampleData);

    const renderView = () => {
        switch (currentView) {
            case 'all-entries':
                return <AllEntries entries={entries} />;
            case 'settings':
                return <Settings />;
            case 'reports':
                return <Reports data={entries} />;
            default:
                return <AllEntries entries={entries} />;
        }
    };

    useEffect(() => {
        const cookie = getCookie('JWT');
        if (!cookie) {
            navigate('/');
        } else if (!isAdmin()) {
            navigate('/unauthorized');
        }
    }, [])

    useEffect(() => {

        const allEntires = async () => {
            const entries = await getAllEntries();
            setEntries(entries.entries);
        }

        allEntires();
    }, []);
    return (
        <div className="flex h-[80vh] bg-[#090909] text-white">
            {/* Sidebar */}
            <div className="w-64 bg-yellow-400 text-black">
                <div className="p-4">
                </div>
                <nav className="mt-4 font-semibold">
                    <ul>
                        <li
                            className={`px-4 py-2 hover:bg-[#7a7a7a] hover:text-black cursor-pointer ${currentView === 'all-entries' ? 'bg-black text-white' : ''}`}
                            onClick={() => setCurrentView('all-entries')}
                        >
                            All Entries
                        </li>
                        <li
                            className={`px-4 py-2 hover:bg-[#7a7a7a] hover:text-black cursor-pointer ${currentView === 'settings' ? 'bg-black text-white' : ''}`}
                            onClick={() => setCurrentView('settings')}
                        >
                            Settings
                        </li>
                        <li
                            className={`px-4 py-2 hover:bg-[#7a7a7a] hover:text-black cursor-pointer ${currentView === 'reports' ? 'bg-black text-white' : ''}`}
                            onClick={() => setCurrentView('reports')}
                        >
                            Reports
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <header className="mb-4">
                    <h1 className="text-3xl font-semibold capitalize flex items-center">Dashboard<MdOutlineKeyboardArrowRight className='text-5xl' />
                        {currentView}</h1>
                </header>

                {/* Main Dashboard Content */}
                <main className="text-white">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
