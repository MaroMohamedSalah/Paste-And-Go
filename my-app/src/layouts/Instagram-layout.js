import { Outlet } from "react-router-dom";
import SubNav from "../components/SubNav";

const InstagramLayout = () => {
	return (
		<>
			<SubNav parent={"instagram"} />
			<Outlet />
		</>
	);
};

export default InstagramLayout;
