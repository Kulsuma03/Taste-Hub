import React from 'react';
import { MdDeleteSweep } from "react-icons/md";

const MyReviewCard = ({ review, handleReviewUpdate, handleDelete }) => {
    const { img, message, serviceName, _id } = review;
    return (
        <tr>
            <th>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {message}

            </td>
            <td>
                <button onClick={() => handleReviewUpdate(_id)} className="btn btn-ghost text-bold text-[#061724] btn-xs">Edit</button>

            </td>
            <th>
                <button onClick={handleDelete}>
                    <MdDeleteSweep className='text-3xl text-red-700'></MdDeleteSweep>
                </button>
            </th>
        </tr>

    );
};

export default MyReviewCard;