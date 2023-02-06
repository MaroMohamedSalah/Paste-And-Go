import "./App.css";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import NavH from "./components/NavH";
import NavV from "./components/NavV";
import Footer from "./components/Footer";
import FaceBook from "./pages/Facebook";
import YouTube from "./pages/YouTube";
import Mp3YT from "./pages/Mp3YT";
import Mp4YT from "./pages/Mp4YT";
import Mp3FB from "./pages/Mp3FB";
import Mp4FB from "./pages/Mp4FB";
import InstaNav from "./components/InstaNav";
import Story from "./pages/Story";
import GetIGUser from "./components/GetIGUser";
import GetIGUser2 from "./components/GetIGUser2";
import GetReelsURL from "./components/GetReelsURL";
import ReelsMP4 from "./pages/ReelsMP4";
import GetInfo from "./pages/GetInfo";
const App = () => {
	localStorage.getItem("plan") === null && localStorage.setItem("plan", "FREE"); // set plan to FREE by default
	return (
		<div className="App row me-0">
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
						<Route
							path="/"
							element={
								<>
									<InstaNav />
									<Outlet />
								</>
							}
						>
							<Route
								path="/"
								element={
									<>
										<Outlet />
									</>
								}
							>
								<Route path="" element={<GetIGUser />} />
								<Route path="story" element={<Story />} />
							</Route>
							<Route
								path="reels"
								element={
									<>
										<Outlet />
									</>
								}
							>
								<Route path="" element={<GetReelsURL />} />
								<Route path="reelsMP4" element={<ReelsMP4 />} />
							</Route>
							<Route
								path="info"
								element={
									<>
										<Outlet />
									</>
								}
							>
								<Route path="" element={<GetIGUser2 />} />
								<Route path="getInfo" element={<GetInfo />} />
							</Route>
						</Route>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
