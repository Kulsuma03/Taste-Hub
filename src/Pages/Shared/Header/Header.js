import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { TbUserCircle } from "react-icons/tb";



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(toast.success('User logged out!'))
            .catch(err => toast.error(err.message))
            
    }


    // console.log(user);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)


    return (
        <div className={`px-4 py-5 sticky top-0 z-50  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ${!navbar ? "bg-transparent text-gray-100 " : "bg-gray-300 "}`}>
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNlJQkFgPCo0J0Vf9oCLipneELDcf0-suHw&usqp=CAU" alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                        Taste Hub
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label="Our product"
                            title="Home"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F] hover:bg-gray-300 p-1"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/allservice"
                            aria-label="Our product"
                            title="Our Services"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F] hover:bg-gray-300 p-1"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/myreview"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F] hover:bg-gray-300 p-1"
                        >
                            My Review
                        </Link>
                    </li>
                    {
                        user?.uid ?
                            <>

                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        aria-label="About us"
                                        title="Login"
                                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F] hover:bg-gray-300 p-1"
                                    >
                                        Logout
                                    </button>
                                </li>
                                <li>
                        {

                            user?.photoURL
                                ?

                                <img src={user.photoURL} alt="" className="w-11 h-11 mx-auto rounded-full dark:bg-gray-500 aspect-square" />

                                :
                                <TbUserCircle className='w-8 h-8 '></TbUserCircle>

                        }
                    </li>

                            </>
                            :
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        aria-label="About us"
                                        title="Login"
                                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F] hover:bg-gray-300 p-1"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                    }

                    

                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 text-[#08263f] bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNlJQkFgPCo0J0Vf9oCLipneELDcf0-suHw&usqp=CAU" alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Taste Hub
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F]"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/allservice"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F]"
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/myreview"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F]"
                                            >
                                                My Review
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/login"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide  transition-colors duration-200 hover:text-[#08263F]"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link
                                                to="/register"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#08263f] hover:bg-[#061724] focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
};

export default Header;