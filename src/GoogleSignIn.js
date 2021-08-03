import React from 'react';
import {auth , provider}  from './FirebaseConfig';
  
const GoogleSignIn = () => {
  
    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
      
    return (
        <div className="sign-in">
            <center>
                <button onClick={handleSignIn}>Sign In with Google</button>
            </center>
        </div>
    );
}
  
export default GoogleSignIn;