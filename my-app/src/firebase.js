import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
