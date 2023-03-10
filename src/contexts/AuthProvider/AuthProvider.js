import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

//4 create context and authinticate all information
//13 create an userContext
//14 set the user context
//15 context api:share auth state with other components
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true);
    


    const providerLogin = provider =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const githubProviderLogin = githubProvider =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }



    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = profile =>{
        return updateProfile(auth.currentUser,profile)
    }


    const logOut = () =>{
        setLoading(true)
      return signOut(auth);
    }

    useEffect( () =>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo ={user,loading,providerLogin,githubProviderLogin,logOut,createUser,signIn,updateUserProfile}
//12 context provider with passed children
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;