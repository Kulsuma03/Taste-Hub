import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {name, img, price, rating, about} = useLoaderData();
    
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p rel="noopener noreferrer" className="mb-0 capitalize dark:text-gray-100">Photography</p>
                </div>
                <p rel="noopener noreferrer" >See All</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>6 min ago</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <p rel="noopener noreferrer" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                    </p>
                    <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;