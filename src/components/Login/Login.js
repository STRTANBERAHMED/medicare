import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const Login = () => {
    const { loginWithGoogle, user, error } = useFirebase();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user2, setUser2] = useState({});
    const [error2, setError2] = useState({});

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user2 = result.user2;
                const { email, displayName, photoURL } = result.user2;

                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser2(userInfo);
                setError2("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError2(errorMessage);
            });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setError2("minimum 6 character");
        } else {
            setPassword(e.target.value);
            setError2("");
        }
    };


    return (
        <div>
            <input onChange={handleEmailChange} type="email" placeholder="Email" />
            <br />
            <input onChange={handlePasswordChange} className="mt-2" type="password" placeholder="Password" />
            <br />
            <button onClick={handleLogin} className="mt-2">sign in</button>
            <br />
            <Link to='/register'><p className="text-primary">are you new please register</p></Link>
            <br />
            <button onClick={loginWithGoogle} className="mt-5">Sign in With Google</button>
        </div>
    );
};

export default Login;