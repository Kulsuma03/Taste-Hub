import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRouter/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://assignment-11-server-seven.vercel.app/services'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allservice',
                loader: () => fetch('https://assignment-11-server-seven.vercel.app/allservice'),
                element: <AllService></AllService>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-seven.vercel.app/details/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/siglereview/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-seven.vercel.app/singlereview/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
         
        ]
    }
])