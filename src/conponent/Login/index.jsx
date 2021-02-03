import React from 'react';
import { GoogleLogin, useGoogleLogin } from 'react-google-login'

const clientId = '984144782520-jsdkovfk0o6vujo3ualmieood2idp08f.apps.googleusercontent.com'

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] current user: ', res.profileObj);
    };

    const onFail = (res) => {
        console.log('[Login Failed] res: ', res);
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFail,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return(
        <div>
            <button onClick={signIn} className="button">
                <span className="buttonText">Sign In with Google</span>
            </button>
        </div>
    )
}

export default Login;