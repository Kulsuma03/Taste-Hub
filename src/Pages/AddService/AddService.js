import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService');

    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value
        const about = form.about.value;
        const img = form.image.value;
        console.log(name, price, img, about);

        const service = {
           price,
           img,
           name,
           about
            
        }
        
       

        fetch('https://assignment-11-server-seven.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }


    return (
        <section className="p-6 bg-gray-400 ">
            <form onSubmit={handleService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 md:p-20 rounded-md shadow-sm bg-gray-300">

                    <div className="grid grid-cols-6 gap-4 col-span-full mx-3 md:mx-20">
                        <div className="col-span-full sm:col-span-3">

                            <label for="firstname" className="text-sm">Service Name</label>
                            <input name='name' id="firstname" type="text" placeholder="Service Name" className="w-full h-11 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />

                        </div>

                        <div className="col-span-full sm:col-span-3">

                            <label for="price" className="text-sm">Price</label>
                            <input name='price' id="price" type="text" placeholder="Price" className="w-full rounded-md h-11 p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />

                        </div>
                        <div className="col-span-full ">

                            <label for="lastname" className="text-sm">Image URL</label>
                            <input name='image' id="lastname" type="text" placeholder="Image URL" className="w-full rounded-md h-11 p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />

                        </div>

                        <div className="col-span-full">
                            <label for="address" className="text-sm">About</label>
                            <textarea name='about' id="address" type="text" placeholder="About" className="w-full rounded-md h-44 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />

                        </div>
                        <div className=''>
                            <button type="submit" className='rounded text-white px-5 py-3 hover:scale-105 duration-300 bg-[#08263f] focus:shadow-outline focus:outline-none'>Add Service</button>
                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default AddService;