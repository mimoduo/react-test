import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import store from "./store/index";
import { addUser } from "./store/actions";

window.store = store;
window.addUser = addUser;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

serviceWorker.unregister();