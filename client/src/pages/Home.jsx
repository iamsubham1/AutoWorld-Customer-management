import React, { useState } from 'react';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        carBrand: '',
        carModel: '',
        registrationNumber: '',
        service: 'washing',
        kmsRan: ''
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

    return (
        <div className="w-screen h-[80vh] grid place-content-center mt-2">
            <h1 className="text-white text-2xl text-center mb-4">Car Service Form</h1>
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
                            className="w-full p-2 border border-gray-300 rounded"
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
                            className="w-full p-2 border border-gray-300 rounded"
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
                    <div className="mb-4 col-span-2">
                        <label className="block  mb-2 font-semibold" htmlFor="kmsRan">Kilometers</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="number"
                            id="kmsRan"
                            name="kmsRan"
                            value={formData.kmsRan}
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

export default Home;
