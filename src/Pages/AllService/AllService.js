import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Home/Services/ServiceCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AllService = () => {
    useTitle('Services')
    const allService = useLoaderData([]);
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">

            <div className="p-6 mb-5 py-12 bg-gray-300 text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" /> 40% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free delivery! Use code:</span>
                            <span className="font-bold text-lg">TEST HUB</span>
                        </div>
                        <Link href="/" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-[#061724]">Bye Now</Link>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {

                    allService.map(service => <ServiceCard
                        key={service.name}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllService;