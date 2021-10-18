import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { loginWithGoogle, user } = useFirebase();
    return (
        <div>
            <h1>this is {user.displayName}</h1>
            <input type="text" />
            <br />
            <input className="mt-2" type="text" />
            <br />
            <button onClick={loginWithGoogle} className="mt-5">Sign in With Google</button>
        </div>
    );
};

export default Login;