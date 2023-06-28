import "./App.css";
import {
	Outlet,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Mp3YT from "./pages/youtube/Mp3YT";
import Mp4YT from "./pages/youtube/Mp4YT";
import Mp3FB from "./pages/facebook/Mp3FB";
import Mp4FB from "./pages/facebook/Mp4FB";
import Story from "./pages/instagram/Story";
import GetIGUser from "./components/GetIGUser";
import GetReelsURL from "./components/GetReelsURL";
import GetInfo from "./pages/instagram/GetInfo";
import FacebookLayout from "./layouts/Facebook-layout";
import HomeLayout from "./layouts/Home-layout";
import YouTubeLayout from "./layouts/Youtube-layout";
import InstagramLayout from "./layouts/Instagram-layout";
import Reels from "./pages/instagram/Reels";
import DownloadFromUrl from "./pages/youtube/Download-from-url";
import YoutubeSearch from "./pages/youtube/Youtube-Search";
import PageNotFound from "./pages/Notfound/Page-Not-Found";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<HomeLayout />}>
				<Route
					path="facebook"
					element={
						<>
							<Outlet />
						</>
					}
				>
					<Route path="" element={<FacebookLayout />} />
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
					<Route path="" element={<YouTubeLayout />}>
						<Route
							path="download-from-url"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<DownloadFromUrl />} />
							<Route path="mp3" element={<Mp3YT />} />
							<Route path="mp4" element={<Mp4YT />} />
						</Route>
						<Route
							path="youtube-search"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<YoutubeSearch />} />
						</Route>
					</Route>
				</Route>

				<Route
					path="/"
					element={
						<>
							<Outlet />
						</>
					}
				>
					<Route path="" element={<InstagramLayout />}>
						<Route
							path="story"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<GetIGUser type="story" />} />
							<Route path="getStory" element={<Story />} />
						</Route>
						<Route
							path="/"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<GetReelsURL />} />
							<Route path="getReels" element={<Reels />} />
						</Route>
						<Route
							path="info"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<GetIGUser type={"info"} />} />
							<Route path="getInfo" element={<GetInfo />} />
						</Route>
					</Route>
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Route>
		)
	);
	localStorage.getItem("plan") === null && localStorage.setItem("plan", "FREE"); // set plan to FREE by default
	return (
		<div className="App row me-0">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
