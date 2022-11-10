import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = ({ services }) => {

    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <Helmet>
                <title>Services</title>
                <meta name="description" content="Login" />
            </Helmet>


            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {
                    services.map(service => <ServiceCard
                        key={service.name}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="mt-12 grid grid-cols-3 items-center text-gray-900">
                <hr className="border-gray-900" />

                <Link to='/allservice' className='text-center py-3 w-full md:w-1/2 mx-auto font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none'>View All</Link>
                <hr className="border-gray-900" />

            </div>
        </div>

    );
};

export default Services;