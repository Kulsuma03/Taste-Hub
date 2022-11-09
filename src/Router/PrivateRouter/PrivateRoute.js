import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LoadingSpinner from '../../Pages/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(user);
    
    if (loading) {
        return <LoadingSpinner />
      }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    else{
        return children;
    }
   
};

export default PrivateRoute;