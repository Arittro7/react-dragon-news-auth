import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Sign In
  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign out
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('AuthState', currentUser);
      setUser(currentUser);
      setLoading(false)

    })
    return () =>{
      unSubscribe();
    }
  },[])

  
  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    loading
  }

  return ( 
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes ={
  children: PropTypes.node
}