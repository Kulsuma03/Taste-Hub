import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const { name, img, price, rating, about } = useLoaderData();

    return (
        <div className="md:w-2/3 mx-auto p-4 shadow-md bg-gray-300 text-gray-900">

            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <p className="mb-0 capitalize text-orange-700">Price: ${price}</p>
                        </div>
                        <div className=' flex items-center'>
                            <div className='text-yellow-500 flex'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <p className='text-orange-700 ml-2'>{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="block">
                        <h3 className="text-xl font-semibold text-[#061724]">{name}</h3>
                    </p>
                    <p className="leading-snug text-gray-900">{about}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;