import React, { useContext } from 'react';
import PhoneInput from 'react-phone-input-2'
import { UserDetailsContext } from '../../contexts/UserDetailsContext';

const UserInformation = () => {

    const { userData, setUserData } = useContext(UserDetailsContext);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        //User Information Form
        <div className="flex flex-col ">
                <div className="mx-2 w-full flex-1">
                    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                        First Name
                    </div>
                    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["firstname"] || ""}
                            name="firstname"
                            placeholder="Firstname"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="mx-2 w-full flex-1">
                    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                        Last Name
                    </div>
                    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["lastname"] || ""}
                            name="lastname"
                            placeholder="Lastname"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="mx-2 w-full flex-1">
                    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                        Phone Number
                    </div>
                    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                        <input
                            type="tel"
                            onChange={handleChange}
                            value={userData["phonenumber"] || ""}
                            name="phonenumber"
                            placeholder="Phone Number"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="mx-2 w-full flex-1">
                    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                        Address
                    </div>
                    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Address"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            required
                        />
                    </div>
                </div>
        </div>
    );
}

export default UserInformation;
