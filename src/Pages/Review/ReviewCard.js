import React from 'react';

const ReviewCard = ({review}) => {
    const {customer, userImg, message} = review;
    return (
        <div className="container flex flex-col ml-0 w-full p-6 divide-y rounded-md divide-gray-700 ">
            <div className="flex justify-between py-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold mt-3">{customer}</h4>
                        {/* <span className="text-xs ">{serviceName}</span> */}
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">

                </div>
            </div>
            <div className="py-4 space-y-2 text-sm ">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ReviewCard;