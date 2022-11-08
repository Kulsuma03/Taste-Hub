import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllService from "../../Pages/AllService/AllService";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

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
            }
        ]
    }
])