import { Outlet } from "react-router-dom";
import InstaNav from "../components/InstaNav";

const InstagramLayout = () => {
	return (
		<>
			<InstaNav />
			<Outlet />
		</>
	);
};

export default InstagramLayout;
