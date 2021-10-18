import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});




    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.message));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError('');
            }
        });
    }, [])


    return { loginWithGoogle, error, user };
};
export default useFirebase;