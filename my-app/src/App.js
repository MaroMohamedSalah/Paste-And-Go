import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavH from "./components/NavH";
import NavV from "./components/NavV";
import Footer from "./components/Footer";
import FaceBook from "./pages/Facebook";
import YouTube from "./pages/YouTube";
import Insta from "./pages/Insta";
import Mp3YT from "./pages/Mp3YT";
import Mp4YT from "./pages/Mp4YT";
import Mp3FB from "./pages/Mp3FB";
import Mp4FB from "./pages/Mp4FB";
import SelectPlan from "./components/SelectPlan";
const App = () => {
	localStorage.getItem("plan") === null && localStorage.setItem("plan", "FREE"); // set plan to FREE by default
	return (
		<div className="App row me-0">
			{/* <SelectPlan /> */}
			<BrowserRouter>
				<NavH />
				<NavV />
				<div className="Main col-lg-11 col-md-10 col">
					<Routes>
						<Route
							path="facebook"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<FaceBook />} />
							<Route path="mp4" element={<Mp4FB />} />
							<Route path="mp3" element={<Mp3FB />} />
						</Route>
						<Route
							path="youtube"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<YouTube />} />
							<Route path="mp4" element={<Mp4YT />} />
							<Route path="mp3" element={<Mp3YT />} />
						</Route>
						<Route path="/" element={<Insta />} />
						{/* <Route path="/" element={<SelectPlan />} /> */}
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
