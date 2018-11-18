import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, rootElement);
