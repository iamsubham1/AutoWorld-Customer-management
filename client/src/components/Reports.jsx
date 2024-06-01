import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie } from 'victory';

const Reports = ({ data }) => {
    // Calculate report metrics
    const totalServices = data.length;
    const totalRevenue = data.reduce((total, record) => total + record.serviceCharge, 0);
    const averageServiceCharge = totalRevenue / totalServices;

    // Calculate top customers
    const customerSpending = data.reduce((acc, record) => {
        acc[record.customerName] = (acc[record.customerName] || 0) + record.serviceCharge;
        return acc;
    }, {});
    const topCustomers = Object.entries(customerSpending)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3);

    // Calculate car brand statistics
    const carBrands = data.reduce((acc, record) => {
        acc[record.carBrand] = (acc[record.carBrand] || 0) + 1;
        return acc;
    }, {});

    // Prepare data for service type pie chart
    const serviceTypes = data.reduce((acc, record) => {
        acc[record.service] = (acc[record.service] || 0) + 1;
        return acc;
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Summary */}
                <div>
                    <h3 className="text-lg font-semibold">Service Summary</h3>
                    <p>Total Services: {totalServices}</p>
                    <p>Total Revenue: ${totalRevenue}</p>
                    <p>Average Service Charge: ${averageServiceCharge.toFixed(2)}</p>
                </div>
                {/* Customer Analysis */}
                <div>
                    <h3 className="text-lg font-semibold">Customer Analysis</h3>
                    <p>Top Customers:</p>
                    <ul>
                        {topCustomers.map(([customer, spending]) => (
                            <li key={customer}>{customer}: ${spending}</li>
                        ))}
                    </ul>
                </div>
                {/* Car Brand Analysis */}
                <div>
                    <h3 className="text-lg font-semibold">Car Brand Analysis</h3>
                    <p>Car Brand Distribution:</p>
                    <VictoryChart
                        domainPadding={{ x: 20 }}
                        theme={VictoryTheme.material}
                        height={300}
                    >
                        <VictoryAxis tickFormat={Object.keys(carBrands)} />
                        <VictoryAxis dependentAxis />
                        <VictoryBar
                            data={Object.entries(carBrands)}
                            x={0}
                            y={1}
                        />
                    </VictoryChart>
                </div>
                {/* Service Type Analysis */}
                <div>
                    <h3 className="text-lg font-semibold">Service Type Analysis</h3>
                    <p>Service Type Distribution:</p>
                    <VictoryPie
                        data={Object.entries(serviceTypes)}
                        x={0}
                        y={1}
                        labels={({ datum }) => `${datum[0]}: ${datum[1]}`}
                        height={300}
                        colorScale="qualitative"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reports;
