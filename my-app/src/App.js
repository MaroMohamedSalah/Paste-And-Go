import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavH from "./components/NavH";
import NavV from "./components/NavV";
import Footer from "./components/Footer";
import FaceBook from "./pages/Facebook";
import YouTube from "./pages/YouTube";
import Insta from "./pages/Insta";
const App = () => {
	return (
		<div className="App row me-0">
			<BrowserRouter>
				<NavH />
				<NavV />
				<div className="Main col-lg-11 col-md-10 col">
					<Routes>
						<Route path="facebook" element={<FaceBook />} />
						<Route path="youtube" element={<YouTube />} />
						<Route path="/" element={<Insta />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
