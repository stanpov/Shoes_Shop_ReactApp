import React,{createContext,useState,useEffect} from 'react';
import {auth} from '../firebase/config'

export const AuthContext = createContext();

export const AuthState =({children})=>{

    const [user,setUser]=useState(null);

    useEffect(()=>{

      auth.onAuthStateChanged((authUser)=>{
            if(authUser) {
               
                    return setUser(authUser)
                
            } else {
               return setUser(null)
            }
        })
        
        
    },[user])


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}