import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();
// const auth = getAuth();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function resetPassword(email){
    return sendPasswordResetEmail(auth,email);
  }

  function reAuth (newPassword){
    const cred = EmailAuthProvider.credential(auth.currentUser.email, newPassword);
    return reauthenticateWithCredential(cred);
  }

  function changePassword(newPassword){
    return updatePassword(auth.currentUser, newPassword).then(() => {
      alert('Password updated!'); 
    }).catch((e) => {
      if(e.code === "auth/requires-recent-login"){
        alert("Kindly relogin again to change the password"); //firebase need fresh login to update new password
    } 
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, logOut, googleSignIn, resetPassword, changePassword, reAuth }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}