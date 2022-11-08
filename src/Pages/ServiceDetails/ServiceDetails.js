import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {name, img, price, rating, about} = useLoaderData();
    
    return (
        <div className="md:w-2/3 mx-auto p-4 shadow-md bg-gray-300 text-gray-900">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p rel="noopener noreferrer" className="mb-0 capitalize text-gray-100">Photography</p>
                </div>
                <p rel="noopener noreferrer" >See All</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>6 min ago</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <p rel="noopener noreferrer" className="block">
                        <h3 className="text-xl font-semibold text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                    </p>
                    <p className="leading-snug text-gray-900">{about}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;