import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie } from 'victory';
import BusinessDetails from './BusinessDetails';

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
        <div className="container mx-auto p-4 overflow-y-scroll max-h-[65vh]">
            <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">BUSINESS REPORT</h2>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <BusinessDetails totalServices={totalServices}
                    totalRevenue={totalRevenue}
                    averageServiceCharge={averageServiceCharge}
                    topCustomers={topCustomers} />
                <div className=' grid  grid-cols-2'>


                    {/* Car Brand Analysis */}
                    <div>
                        <VictoryChart
                            domainPadding={{ x: 20 }}
                            theme={VictoryTheme.grayscale}
                            height={300}
                        >
                            <VictoryAxis
                                tickFormat={Object.keys(carBrands)}
                                style={{
                                    tickLabels: { fill: "#FACC15" } // Set text color to yellow
                                }}
                            />                        <VictoryAxis dependentAxis />
                            <VictoryBar
                                data={Object.entries(carBrands)}
                                x={0}
                                y={1}
                                // Specify custom color scale
                                style={{
                                    data: { fill: "#232323" },
                                }}
                            />
                        </VictoryChart>
                    </div>
                    {/* Service Type Analysis */}
                    <div>

                        <VictoryPie
                            data={Object.entries(serviceTypes)}
                            x={0}
                            y={1}
                            labels={({ datum }) => `${datum[0]}: ${datum[1]}`}
                            height={300}
                            colorScale={["#FACC15", "#232323"]}
                            style={{
                                labels: { fill: "#FACC15" } // Set label text color to yellow
                            }}
                        />


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
