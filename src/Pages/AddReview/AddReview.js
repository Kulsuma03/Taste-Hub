import React from 'react';
import { Link} from 'react-router-dom';


const AddReview = () => {
   
    return (
        <p className='p-4 text-xl  text-[#061724]'>
        To add a Review
        <Link className='text-2xl font-bold' to='/login' > Please Login </Link>
       </p>
    );
};

export default AddReview;