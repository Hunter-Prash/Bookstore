import React, { useContext , useState, createContext} from "react";

export const AuthContext=createContext()

export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("User")
    const [authUser, setAuthUser]=useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined)

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );  
}
export const useAuth=()=> useContext(AuthContext)//Creates a custom hook for easier access to the auth context .Components can use this hook to access auth state and functions