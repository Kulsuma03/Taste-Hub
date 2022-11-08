import React from 'react';

const Review = ({id}) => {
  
            // const { _id, title, price } = useLoaderData();
            // const { user } = useContext(AuthContext);
        
            const handleReview = event => {
                event.preventDefault();
                const form = event.target;
                const message = form.message.value;
                console.log(message);
        
                const review = {
                    service: id,
                    message
                }
        
                fetch('http://localhost:5000/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.acknowledged){
                            alert('review added successfully')
                            form.reset();
                            
                        }
                    })
                    .catch(er => console.error(er));
        
        
            }
        
            return (
                <div>
                    <form onSubmit={handleReview}>
                        
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>
        
                        <input className='font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none p-3' type="submit" value="Add Review" />
                    </form>
                </div>
         
    );
};

export default Review;