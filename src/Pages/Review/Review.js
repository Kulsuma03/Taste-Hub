import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Review = ({ id, name, img }) => {
    useTitle('Review')

    const { user, setReview } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const email = user?.email;
        const customer = user?.displayName;
        const userImg = user?.photoURL;
        const date = new Date().toLocaleString('en-GB')
        console.log(userImg);

        const review = {
            service: id,
            message,
            serviceName: name,
            email,
            customer,
            userImg,
            img,
            date
            
        }
        
        setReview(review)

        fetch('https://assignment-11-server-seven.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('taste-token')}`
            },
            body: JSON.stringify(review)
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
        <div>
            <form onSubmit={handleReview}>

                <textarea name="message" className="textarea my-10 textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                <input className='font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none p-3' type="submit" value="Add Review" />
            </form>
        </div>

    );
};

export default Review;