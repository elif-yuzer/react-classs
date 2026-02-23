import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import React, { createContext, useState ,useEffect} from "react";
import { toastSuccess, toastError,toastWarn } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthKontext = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if(user){
        const {email,displayName,photoURL}=user
        setCurrentUser({
          email:email,
          displayName:displayName,
          photoURL:photoURL
        })
      }else {
        setCurrentUser(false)
      }
      
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((onceki) => ({
      ...onceki,
      [name]: value,
    }));
  };

  const handleRegister = async (info, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, info.email, info.password);
      setCurrentUser(auth.currentUser);
      toastSuccess("Registered Successfully");

      await updateProfile(auth?.currentUser, { displayName: displayName });

      navigate("/");
    } catch (error) {
      toastError(`${error.message} yanlış girdin`);
    }
  };

  const handleSignIn = async (infologin) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        infologin.email,
        infologin.password,
      );
      setCurrentUser(auth.currentUser);
      console.log(infologin);
      toastSuccess("Logged in");
      await updateProfile(auth?.currentUser, { displayName: infologin.email.split("@")[0] });
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  const handleWithGoogle=async()=>{

    const provider=new GoogleAuthProvider()
   try {
   
    setCurrentUser(await signInWithPopup(auth,provider))
   toastSuccess("Login succeed with Google")
   navigate("/")
    
   } catch (error) {
    toastError("Login failed with Google")
    
   }
    
  }

  const handleLogOut =  () => {
     signOut(auth)
      .then(() => {
       
        toastSuccess("Logged Out")
      })
      .catch((error) => {
        console.log("logout basarısz", error);
      });
  };

   const handleResetPass = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      if(!email) {
        toastWarn("Please enter your email")
      }else if (email){
        toastSuccess("Password reset request sent.")
      }
      

      
    } catch(error){ 
        
        toastWarn("Could not send reset email.");
    }
   
  };

  return (
    <AuthKontext.Provider
      value={{
        handleChange,
        setInfo,
        info,
        handleRegister,
        currentUser,
        handleSignIn,
        handleWithGoogle,
        handleLogOut,
        handleResetPass
      }}
    >
      {children}
    </AuthKontext.Provider>
  );
};

export default AuthContext;
