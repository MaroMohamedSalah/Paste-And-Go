import { Outlet } from "react-router-dom";
import SubNav from "../components/SubNav";

const YouTubeLayout = () => {
	return (
		<div className="Youtube">
			<SubNav parent={"youtube"} />
			<Outlet />
		</div>
	);
};

export default YouTubeLayout;
