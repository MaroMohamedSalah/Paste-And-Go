import { Link } from "react-router-dom";
import "./Page-Not-Found.css";

const PageNotFound = () => {
	return (
		<div className="PageNotFound d-flex justify-content-center align-items-center flex-column">
			<h1>ERROR</h1>
			<h2>404</h2>
			<h2>Page not found</h2>
			<Link to={"/"}>
				<div className="btn">Go Home</div>
			</Link>
		</div>
	);
};

export default PageNotFound;
