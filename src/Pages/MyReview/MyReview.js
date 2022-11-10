import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // if(!user?.email){
        //     return;
        // }
        fetch(`https://assignment-11-server-seven.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('taste-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
                // console.log(data);
            })
    }, [user?.email, logOut])

    //    handleDelete 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviewd/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('taste-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    // handleUpdate 

    const handleReviewUpdate = id => {
        navigate(`/siglereview/${id}`)
    }

    return (
        <div className='lg:w-4/5 mx-auto h-screen flex items-center justify-center'>
            <div className="overflow-x-auto w-full ">
           

                {
                    reviews.length !== 0 ?
                        <table className="table w-full py-44">

                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Service Name & Image</th>
                                    <th>Your Review</th>
                                    <th>Edit Review</th>
                                    <th>Delete Review</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reviews.map(review => <MyReviewCard
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                        handleReviewUpdate={handleReviewUpdate}
                                    ></MyReviewCard>)
                                }




                            </tbody>

                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                        :
                        <div className='bg-gray-300 w-full py-44'>
                            <h2 className='text-center text-bold text-5xl'>You Have no Reviews</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyReview;