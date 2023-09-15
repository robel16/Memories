import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { client } from "../client";
import { Navigate, useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  //google sign
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  //google signout
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);


     
      
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

// import { useContext,createContext } from "react";
// import {GoogleAuthProvider, signInWithPopup,signInWithRedirect, signOut,onAuthStateChanged } from "firebase/auth";
// import {auth } from '../firebase'
// const AuthContext=createContext()
// export  const AuthContextProvider=({children})=>{
//     const googleSignIn=()=>{
//         const provider=new GoogleAuthProvider();
//         signInWithPopup(auth,provider);
//     };
//     return(
//         <AuthContext.Provider value={{googleSignIn}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const UserAuth =()=>{
//     return useContext(AuthContext)
// }
