import React from 'react';

const Blog = () => {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 md:grid-cols-2">
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative flex flex-col h-full p-5 bg-gray-300 rounded-sm lg:items-center lg:flex-row">
                        <div className="mb-6 mr-6 lg:mb-0">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#7CA1B1] lg:w-32 lg:h-32">
                                <svg
                                    className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h6 className="my-3 font-bold text-2xl leading-5">
                                    Difference between SQL and NoSQL
                                </h6>
                                <p className="mb-2 text-sm text-gray-900">
                                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                    <br />
                                    <span className='text-bold text-xl '>There are five practical differences between SQL and NoSQL:</span>
                                    <br />
                                    <span>1. Language</span>
                                    <br />
                                    <span>2. Scalability</span>
                                    <br />
                                    <span>3. Structure</span>
                                    <br />
                                    <span>4. Properties</span>
                                    <br />
                                    <span>5. Support and communities</span>

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative flex flex-col h-full p-5 bg-gray-300 rounded-sm lg:items-center lg:flex-row">
                        <div className="mb-6 mr-6 lg:mb-0">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#7CA1B1] lg:w-32 lg:h-32">
                                <svg
                                    className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h6 className="my-3 font-bold text-2xl leading-5">
                                    What is JWT, and how does it work?
                                </h6>
                                <p className="mb-2 text-sm text-gray-900">
                                    <span className='text-bold text-xl '>What Is JWT?:</span><br />
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                                    <span className='text-bold text-xl '>How JWT Works</span><br />
                                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.


                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative flex flex-col h-full p-5 bg-gray-300 rounded-sm lg:items-center lg:flex-row">
                        <div className="mb-6 mr-6 lg:mb-0">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#7CA1B1] lg:w-32 lg:h-32">
                                <svg
                                    className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h6 className="my-3 font-bold text-2xl leading-5">
                                What is the difference between javascript and NodeJS?
                                </h6>
                                <p className="mb-2 text-sm text-gray-900">
                                JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative flex flex-col h-full p-5 bg-gray-300 rounded-sm lg:items-center lg:flex-row">
                        <div className="mb-6 mr-6 lg:mb-0">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#7CA1B1] lg:w-32 lg:h-32">
                                <svg
                                    className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h6 className="my-3 font-bold text-2xl leading-5">
                                How does NodeJS handle multiple requests at the same time?
                                </h6>
                                <p className="mb-2 text-sm text-gray-900">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;