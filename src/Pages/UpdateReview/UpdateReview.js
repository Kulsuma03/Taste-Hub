import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const {_id, img, message, serviceName,} = useLoaderData();
    const navigate = useNavigate();
    console.log(_id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.massage.value);
        const review = {
          massage: e.target.massage.value,
          
        }
    
        fetch(`https://assignment-11-server-seven.vercel.app/updatereview/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem('taste-token')}`
          },
          body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/myreview')
          // if(data.modifiedCount){
          //   alert(data.message);
          //   navigate("/myreview")
          // } else {
          //   toast.error(data.error)
          // }
        })
        .catch(err => toast.error(err.message))
      }



    return (
        <section className="p-6 bg-gray-400 text-[#08263f] h-full flex items-center justify-center">
            <form  onSubmit={handleSubmit} className="container md:w-3/4  flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 md:py-16 rounded-md shadow-sm bg-gray-300">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-2xl font-bold ">{serviceName}</label>
                            <textarea defaultValue={message} name='massage' id="bio" placeholder="" className="w-full p-5 h-20 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 mt-5"></textarea>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <img src={img}alt="" className="w-14 h-14 rounded-full bg-gray-500 bg-gray-700" />
                                <button type="submit" className="px-4 py-2 border rounded-md border-gray-100 font-bold">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateReview;