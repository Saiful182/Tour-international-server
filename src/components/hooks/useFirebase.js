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
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                setUser(user)
                setError('');

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    const logInWithPasswordEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setError('');


            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {

                setError('');
                // setUser(user);
            }).catch((error) => {
                setError(error);
            }
            )
    }
    const regitration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUserName();

                const user = userCredential.user;
                setUser(user);
                setError('');

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
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
        signInUsingGoogle, logOut, user, error, setName, setPassword, setEmail, regitration, logInWithPasswordEmail
    }
}
export default useFirebase;