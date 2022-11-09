import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='w-full'>
        <div className="w-16 mx-auto mt-24 h-16 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
    </div>
    );
};

export default LoadingSpinner;