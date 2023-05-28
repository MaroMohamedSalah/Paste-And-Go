import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RecoilRoot } from "recoil";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
// 	apiKey: "AIzaSyBzlLFSDCNUN9uVE8KhyU6VqHcw3AZbCxU",
// 	authDomain: "paste-and-go.firebaseapp.com",
// 	projectId: "paste-and-go",
// 	storageBucket: "paste-and-go.appspot.com",
// 	messagingSenderId: "249497879782",
// 	appId: "1:249497879782:web:e077cad0006ccdcf446727",
// 	measurementId: "G-G3B1KHQ8SB",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);

reportWebVitals();
