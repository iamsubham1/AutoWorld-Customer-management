import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AllEntries = ({ entries }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(5);
    const [filteredEntries, setFilteredEntries] = useState(entries);
    const [serviceFilter, setServiceFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
        return new Date(date).toLocaleDateString('en-GB', options);
    };

    useEffect(() => {
        let updatedEntries = [...entries];

        if (serviceFilter) {
            updatedEntries = updatedEntries.filter(entry => entry.service === serviceFilter);
        }

        if (dateFilter) {
            updatedEntries = updatedEntries.filter(entry => {
                const entryDate = new Date(entry.createdAt).setHours(0, 0, 0, 0);
                const filterDate = new Date(dateFilter).setHours(0, 0, 0, 0);
                return entryDate === filterDate;
            });
        }

        updatedEntries.sort((a, b) => {
            if (sortOrder === 'asc') {
                return new Date(a.createdAt) - new Date(b.createdAt);
            } else {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
        });

        setFilteredEntries(updatedEntries);
        setCurrentPage(1);
    }, [serviceFilter, dateFilter, entries, sortOrder]);

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSortOrderChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };

    const sortOrderOptions = [
        { value: 'desc', label: 'Newest First' },
        { value: 'asc', label: 'Oldest First' },
    ];

    return (
        <div className='mt-10'>

            <div className="flex space-x-4 mb-4 text-black">
                <input
                    type="text"
                    placeholder="Filter by service"
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="p-2 border rounded"
                />
                <input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="p-2 border rounded"
                />
                <Dropdown
                    options={sortOrderOptions}
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                />
            </div>

            <ul className="mt-10 gap-4">
                <div className=" grid grid-cols-6 p-4 border-b text-center text-[#999999] capitalize">
                    <p>customerName</p>
                    <p>carBrand</p>
                    <p>carModel</p>
                    <p>service</p>
                    <p>serviceCharge</p>
                    <p>date</p>
                </div>
                {currentEntries.map((entry, index) => (
                    <>

                        <div key={index} className=" grid grid-cols-6 p-4 border-b text-center">
                            <p>{entry.customerName}</p>
                            <p>{entry.carBrand}</p>
                            <p>{entry.carModel}</p>
                            <p>{entry.service}</p>
                            <p>{entry.serviceCharge}</p>
                            <p>{formatDate(entry.createdAt)}</p>
                        </div>
                    </>
                ))}
            </ul>

            <div className="flex justify-center mt-4 items-center">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                >
                    <FaChevronLeft />
                </button>
                <p className="mx-2 bg-yellow-400 px-3 py-1 text-black font-semibold rounded">{currentPage}</p>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastEntry >= filteredEntries.length}
                    className={`px-4 py-2 mx-1 border rounded ${indexOfLastEntry >= filteredEntries.length ? 'cursor-not-allowed' : ''}`}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default AllEntries;
