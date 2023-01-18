import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavH from "./components/NavH";
import NavV from "./components/NavV";
import Footer from "./components/Footer";
import FaceBook from "./pages/Facebook";
import YouTube from "./pages/YouTube";
import Insta from "./pages/Insta";
import Mp3YT from "./pages/Mp3YT";
const App = () => {
	return (
		<div className="App row me-0">
			<BrowserRouter>
				<NavH />
				<NavV />
				<div className="Main col-lg-11 col-md-10 col">
					<Routes>
						<Route path="facebook" element={<FaceBook />} />
						<Route
							path="youtube"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<YouTube />} />
							<Route path="mp3" element={<Mp3YT />} />
						</Route>
						<Route path="/" element={<Insta />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
