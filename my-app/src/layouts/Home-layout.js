import { Outlet } from "react-router-dom";
import NavH from "../components/NavH";
import NavV from "../components/NavV";
import Footer from "../components/Footer";

const HomeLayout = () => {
	return (
		<>
			<NavH />
			<NavV />
			<div className="col-lg-11 col-md-10 col overflow-hidden">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default HomeLayout;
