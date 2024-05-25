import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utility/getCookie';

const CarEntry = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        carBrand: '',
        carModel: '',
        registrationNumber: '',
        service: '',
        serviceCharge: '',
        serviceDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    useEffect(() => {
        const cookie = getCookie('JWT');
        console.log("cookie", cookie);
        if (!cookie) {
            navigate('/');
        }
    }, []);
    return (
        <div className="w-screen h-[80vh] grid place-content-center mt-2">
            <h1 className="text-white text-3xl text-center mb-4 uppercase">Car Entry</h1>
            <form className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg text-black " onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="name">Customer Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Enter name'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  mb-2 font-semibold" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            placeholder='Enter Ph.No'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  mb-2 font-semibold" htmlFor="carBrand">Car Brand</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded text-black"
                            id="carBrand"
                            name="carBrand"
                            value={formData.carBrand}
                            onChange={handleChange}
                            required

                        >
                            <option value="">Select Car Brand</option>
                            <option value="Maruti Suzuki">Maruti Suzuki</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Tata">Tata</option>
                            <option value="Mahindra">Mahindra</option>
                            <option value="Kia">Kia</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Ford">Ford</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Renault">Renault</option>
                            <option value="Skoda">Skoda</option>
                            <option value="MG">MG</option>
                            <option value="Jeep">Jeep</option>

                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block  mb-2 font-semibold" htmlFor="carModel">Car Model</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="carModel"
                            name="carModel"
                            value={formData.carModel}
                            onChange={handleChange}
                            required
                            placeholder='Enter Vehicle Model'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  mb-2 font-semibold" htmlFor="registrationNumber">Registration Number</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="registrationNumber"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            required
                            placeholder='Enter Registration No'

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  mb-2 font-semibold" htmlFor="service">Service</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded text-black"
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="washing">Washing</option>
                            <option value="detailing">Detailing</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="mb-4 ">
                        <label className="block  mb-2 font-semibold" htmlFor="serviceCharge">Expected Service Charge</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="number"
                            id="serviceCharge"
                            name="serviceCharge"
                            value={formData.serviceCharge}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 ">
                        <label className="block  mb-2 font-semibold" htmlFor="serviceCharge">Service description</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="serviceDescription"
                            name="serviceDescription"
                            value={formData.serviceDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <button
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CarEntry;
