import { Outlet } from "react-router-dom";
import NavH from "../components/NavH";
import NavV from "../components/NavV";
import Footer from "../components/Footer";

const HomeLayout = () => {
	return (
		<>
			<NavH />
			<NavV />
			<Outlet />
			<Footer />
		</>
	);
};

export default HomeLayout;
