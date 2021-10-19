import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { Link } from 'react-router-dom';

initializeAuthentication();

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.log("minimum 6 character");
        } else {
            setPassword(e.target.value);
        }
    };


    const handlRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, displayName, photoURL } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser(userInfo);
            })
            .catch((error) => {
                setError(error.message);
            });
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

    return (
        <div>
            <h1>Please Register</h1>
            <h2>{user.email}</h2>
            <input onChange={handleEmailChange} type="email" placeholder="Enter Your Email" required />
            <br />
            <input onChange={handlePasswordChange} className="mt-2" type="password" placeholder="Enter Your Password" required />
            <br />
            <p className="text-danger">{error}</p>
            <button onClick={handlRegister} className="mt-2">Register</button>
            <br /><br />
            <Link to='/login'><p className="text-primary">already have an account ?</p></Link>
        </div>
    );
};

export default Register;