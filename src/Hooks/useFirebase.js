import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    const loginWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => setUser(result.user))
            .finally(() => setIsLoading(false))
            .catch((error) => setError(error.message));
    };

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return { loginWithGoogle, logOut, isLoading, user };
};
export default useFirebase;