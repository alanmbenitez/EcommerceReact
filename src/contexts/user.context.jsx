import { createContext, useEffect, useState } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener , signOutUser} from "../utils/firebase/firebase.utils";

//actual value you want to access
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () => null
});



export const UserProvider = ({children}) => {
   
    const [currentUser, setCurrentUser]  = useState(null)
    const value = {currentUser, setCurrentUser} 
   

    useEffect(() => {
       const unsubscribe = onAuthStateChangedListener((user) => {
        setCurrentUser(user)
        if(user){
        createUserDocumentFromAuth(user)
        }
       })
       return unsubscribe
    },[])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}

