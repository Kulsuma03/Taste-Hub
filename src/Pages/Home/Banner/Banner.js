import React from 'react';
import img2 from '../../../assets/brands/barnd.jpeg';







const Banner = () => {
    return (
        <div className="">

            <div className='bg-gradient-to-tl from-gray-900 opacity-100 h-screen z-0 mt-[-85px] relative'>
                <img src={img2} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
            </div>
           <div>
            <h1></h1>
           </div>


        </div>
    );
};

export default Banner;