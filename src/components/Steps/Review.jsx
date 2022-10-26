import React, { useContext } from 'react';
import { UserDetailsContext } from '../../contexts/UserDetailsContext';

const Review = () => {

    const { userData, setUserData } = useContext(UserDetailsContext);

    //Display details delected by user to confirm before submitting the form.
    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    First Name
                </div>
                <div className="my-2 flex border-none bg-white p-1">
                    <input
                        value={userData["firstname"]}
                        disabled
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Last Name
                </div>
                <div className="my-2 flex border-none bg-white p-1">
                    <input
                        value={userData["lastname"]}
                        disabled
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Phone Number
                </div>
                <div className="my-2 flex border-none bg-white p-1">
                    <input
                        value={userData["phonenumber"]}
                        disabled
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Address
                </div>
                <div className="my-2 flex border-none bg-white p-1">
                    <input
                        value={userData["address"]}
                        disabled
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Pokemon
                </div>
                <div className="my-2 flex border-none bg-white p-1">
                    <input
                        value={userData["pokemon"]}
                        disabled
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
        </div>

    );
}

export default Review;
