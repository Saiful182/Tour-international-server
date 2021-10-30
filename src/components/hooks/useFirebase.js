import { useState, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import firebaseInitialization from "../Firebase/firebase.initialization";


firebaseInitialization();
const useFirebase = () => {

    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logInWithPasswordEmail = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                setError('');

            }).catch((error) => {
                setError(error);
            }
            )
    }
    const regitration = () => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    return {
        signInUsingGoogle, logOut, user, error, setName, setPassword, setEmail, regitration, logInWithPasswordEmail, setError, setUserName, password
    }
}
export default useFirebase;