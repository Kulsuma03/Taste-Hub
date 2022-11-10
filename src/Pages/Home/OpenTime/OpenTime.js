import React from 'react';

const OpenTime = () => {
    return (
        <div className='lg:mx-8 my-11 bg-gray-300 '>
            <h2 className='text-center text-3xl text-bold my-7 pt-7'>Opening hours</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Day</th>
                            <th>Start Hour</th>
                            <th>End Hour</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Friday</td>
                            <td>12pm</td>
                            <td>10pm</td>
                        </tr>

                        <tr className="active">
                            <th>2</th>
                            <td>Monday</td>
                            <td>12pm</td>
                            <td>4pm</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Sunday</td>
                            <td>12pm</td>
                            <td>4pm</td>
                        </tr>
                        <tr className="active">
                            <th>4</th>
                            <td>Tuesday</td>
                            <td>12pm</td>
                            <td>4pm</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Saturday</td>
                            <td>12pm</td>
                            <td>10pm</td>
                        </tr>
                        <tr className="active">
                            <th>6</th>
                            <td>Thursday</td>
                            <td>12pm</td>
                            <td>4pm</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Wednesday</td>
                            <td>12pm</td>
                            <td>4pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenTime;