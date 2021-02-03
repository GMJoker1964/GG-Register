import React, { useState } from 'react';
import { GoogleLogout, useGoogleLogout } from 'react-google-login';

function Logout(props) {

    const clientId = '984144782520-jsdkovfk0o6vujo3ualmieood2idp08f.apps.googleusercontent.com';

    const onSuccess = () =>{
        alert('Logout Success');
    }

    const onFail = () =>{
        console.log("Handle Failure cases");
    }
    const {signOut} = useGoogleLogout({
        clientId,
        onSuccess,
        onFail,
    })
    return (
        <div>
            <button onClick={signOut} className="button">
                <span className="buttontext">Sign out</span>
            </button>
        </div>
    );
}

export default Logout;