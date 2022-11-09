import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({})
    
    const googleProvider = new GoogleAuthProvider()

    // sign in with google 
    
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    
    // login with password 
    
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // sign with email and password 
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // log out 
    
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    // reset password 
    
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // update User Profile

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    
    // set CurrentUser 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);       
            setLoading(false)
        })
        return () => {unsubscribe()}
    },[]);
  
    
    const authInfo = {
        user, 
        signInWithGoogle,
        logOut, 
        createUser, 
        logIn, 
        updateUserProfile,
        loading,
        setLoading,
        setUser,
        review,
        setReview
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;