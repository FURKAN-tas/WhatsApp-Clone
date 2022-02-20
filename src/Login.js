import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from "./firebase.js";
import { actionTypes } from "./reducer.js";
import { useStateValue } from './StateProvider.js';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

  return <div className="login">
      <div className="login__container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
        alt=""/>
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
  </div>;
}

export default Login;

