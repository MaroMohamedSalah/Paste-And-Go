import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RecoilRoot } from "recoil";

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter history={history}>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
