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
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log(currentUser);

      console.log(currentUser.displayName);

      localStorage.setItem("user", JSON.stringify(currentUser));

      const { displayName, uid, photoURL } = currentUser;

      const doc = {
        _id: uid,

        _type: "user",
        userName: displayName,

        image: photoURL,
      };
      client.createIfNotExists(doc).then(() => {
        navigate("/", {
          replace: true,
        });
      });
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
