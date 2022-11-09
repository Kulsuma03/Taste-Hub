import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {
    const { name, _id, rating, img, about, price } = service;

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-gray-300 rounded shadow-sm">
           
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className="object-cover cursor-pointer w-full h-64" src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="p-5 border border-t-0">

                <Link
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {name}
                </Link>
                <p className="mb-2 text-gray-700">
                    {about.length > 100 ? about.slice(0, 100) + '...' : about}
                </p>
                <div>
                    <p className='font-bold text-orange-700'>
                        Price: ${price}
                    </p>
                    <Link to={`/details/${_id}`}>
                        <button className='h-12 mt-2 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none'> view Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;