import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RecoilRoot } from "recoil";

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { Provider } from "react-redux";

const firebaseConfig = {
	apiKey: "AIzaSyBzlLFSDCNUN9uVE8KhyU6VqHcw3AZbCxU",
	authDomain: "paste-and-go.firebaseapp.com",
	projectId: "paste-and-go",
	storageBucket: "paste-and-go.appspot.com",
	messagingSenderId: "249497879782",
	appId: "1:249497879782:web:e077cad0006ccdcf446727",
	measurementId: "G-G3B1KHQ8SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
// Add the public key generated from the console here.
getToken(messaging, {
	vapidKey:
		"BLsyjCAEAEDklJVOjllh5jRDoEPuZht82G2_OTbhDyTq9EtBVhtH6mRMgHG_dChNZpGWlJ-LwL1ig_n9vpeMTw8",
});

// Callback function to handle profiling results
function onProfilerRender(
	id, // Identifier of the Profiler component
	phase, // Either "mount" (component is being mounted) or "update" (component is being re-rendered)
	actualDuration, // Time taken to render the component
	baseDuration, // Estimated time to render the entire subtree without memoization
	startTime, // When React began rendering this update
	commitTime, // When React committed this update
	interactions // Set of interactions that were being traced when this update was scheduled
) {
	// You can perform any custom actions with the profiling results here
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider >

		</Provider> */}
		<RecoilRoot>
			{/* Add the Profiler tag */}
			<Profiler id="AppProfiler" onRender={onProfilerRender}>
				<App />
			</Profiler>
		</RecoilRoot>
	</React.StrictMode>
);

reportWebVitals();
