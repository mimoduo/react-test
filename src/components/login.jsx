import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { ADD_USER } from "../store/constants";
import '../styles/login.scss';

function Login() {
	const dispatch = useDispatch();
	const [visibility, setVisibility] = useState("visible");

	const onSuccessResponseGoogle = (response) => {
		dispatch({ 
			type: ADD_USER, 
			payload: response
		})

		setVisibility("hidden");
	}

	const onFailureResponseGoogle = (response) => {
		console.log(response);
	}

	return (
		<GoogleLogin
			className={ "google_login " + visibility }
			clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
			buttonText="Sign in With Google"
			onSuccess={ onSuccessResponseGoogle }
			onFailure={ onFailureResponseGoogle }
			cookiePolicy={ 'single_host_origin' }
		/>
	);
}

export default Login;