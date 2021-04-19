import React,{createContext,useState,useEffect} from 'react';
import {auth} from '../firebase/config'

export const AuthContext = createContext();

export const AuthState =({children})=>{

    const [user,setUser]=useState(null);
    const [authDisplayName,setAuthDisplayName] = useState('')

    useEffect(()=>{

      auth.onAuthStateChanged((authUser)=>{
            if(authUser) {
                if(authUser.displayName === null) {
                    return authUser.updateProfile({
                        displayName: authDisplayName
                    })
                } else {
                    return setUser(authUser.displayName)
                }
            } else {
               return setUser(null)
            }
        })
        
        
    },[user,authDisplayName])


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            setAuthDisplayName
        }}>
            {children}
        </AuthContext.Provider>
    )
}