import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';

const AllReview = ({ id }) => {
    useTitle('MyReview')
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-seven.vercel.app/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                // console.log(reviews)
            })
    }, [])


    return (
        <div>
            <h2 className='mx-5 text-2xl font-bold bg-[#809FB1] p-2'> Customer Reviews</h2>
            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;