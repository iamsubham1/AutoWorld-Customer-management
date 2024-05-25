import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import { GrUserWorker } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";

const Home = () => {
    const [loginType, setLoginType] = useState(null);
    const handleSelectLogin = (type) => {
        setLoginType(type);
    };
    const handleBack = () => {
        setLoginType(null);
    };


    return (

        <>
            {!loginType ? (<div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
                <h1 className="text-5xl font-regular mb-8 text-yellow-400">AutoWorld  Login Page</h1>
                <div className="flex">
                    <button className=" bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 font-semibold mr-4 flex gap-2 items-center" onClick={() => handleSelectLogin('admin')}><RiAdminFill className='text-3xl' />


                        Admin Login</button>
                    <button className=" bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 font-semibold flex gap-2 items-center" onClick={() => handleSelectLogin('worker')}> <GrUserWorker className='text-3xl' />
                        Worker Login</button>
                </div>  </div>) : (<Login heading={loginType} handleBack={handleBack} />)}


        </>
    );
};

export default Home;
