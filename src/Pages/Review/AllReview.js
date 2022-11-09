import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReview = ({id}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-seven.vercel.app/review/${id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(reviews)
        })
    },[])
    

    return (
        <div>
            {
                reviews.map(review => <ReviewCard 
                    key={review._id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default AllReview;