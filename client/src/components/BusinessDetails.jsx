import React from 'react';

const BusinessDetails = ({ totalServices, totalRevenue, averageServiceCharge, topCustomers }) => {
    return (
        <div className='flex w-full'>
            {/* Service Summary */}
            <div className="flex-grow mr-4 border-[#434343] border-2 p-3">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">Service Summary</h3>
                <table className="w-full ">
                    <tbody className=''>
                        <tr>
                            <td>Total Services:</td>
                            <td>{totalServices}</td>
                        </tr>
                        <tr>
                            <td>Average Service Charge:</td>
                            <td>${averageServiceCharge}</td>
                        </tr>
                        <tr>
                            <td>Total Revenue:</td>
                            <td>${totalRevenue}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/* Customer Analysis */}
            <div className="flex-grow  border-[#434343] border-2 p-3 ">
                <h3 className="text-lg font-medium mb-2 text-yellow-400" >Customer Analysis</h3>
                <table className="w-full">
                    <tbody>
                        <tr className='text-left text-[#5c5c5c] ' >
                            <th className='font-medium'>Customer Name</th>
                            <th className='font-medium'>Spending</th>
                        </tr>
                        {topCustomers.map(([customer, spending]) => (
                            <tr key={customer}>
                                <td>{customer}</td>
                                <td>${spending}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >

    );
};

export default BusinessDetails;
