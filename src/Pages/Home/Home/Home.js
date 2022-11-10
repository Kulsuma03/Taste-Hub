import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import OpenTime from '../OpenTime/OpenTime';
import Services from '../Services/Services';

const Home = () => {
    const services = useLoaderData([]);
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Delivery></Delivery>
            <OpenTime></OpenTime>
        </div>
    );
};

export default Home;