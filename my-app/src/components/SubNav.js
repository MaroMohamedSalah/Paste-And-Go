import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SubNav.css";

const SubNav = ({ parent }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// Initial check on mount
		handleResize();

		// Listen for window resize events
		window.addEventListener("resize", handleResize);

		// Clean up event listener on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<ul className="navOpt">
			{parent === "instagram" ? (
				<>
					<NavLink to={"story"}>
						<div className="icon">
							<i className="fa-solid fa-boxes-stacked"></i>
						</div>
						<li>Stories</li>
					</NavLink>
					<NavLink to={"/"}>
						<div className="icon">
							<i className="fa-solid fa-play"></i>
						</div>
						<li>Reels</li>
					</NavLink>
					<NavLink to={"info"}>
						<div className="icon">
							<i className="fa-solid fa-magnifying-glass"></i>
						</div>
						<li>Info</li>
					</NavLink>
				</>
			) : (
				<>
					<NavLink to={"youtube-search"}>
						<div className="icon">
							<i className="fa-solid fa-magnifying-glass"></i>
						</div>
						<li>{isMobile ? "Search" : "Search for a specific video"}</li>
					</NavLink>
					<NavLink to={"download-from-url"}>
						<div className="icon">
							<i className="fa-solid fa-paste"></i>
						</div>
						<li>{isMobile ? "Paste" : "Paste the URL"}</li>
					</NavLink>
				</>
			)}
		</ul>
	);
};

export default SubNav;
