import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./InstaNav.css";
const InstaNav = () => {
	useEffect(() => {
		let options = document.querySelectorAll(".instaOptions a");
		let current = null;
		options.forEach((op, i) => {
			op.onclick = () => {
				current = document.querySelectorAll(".instaOptions .active");
				if (current.length > 0) {
					// remove Active class from other elements
					current[0].className = "";
				}
				op.className += "active";
			};
		});
	}, []);
	return (
		<ul className="instaOptions">
			<Link to={"/"} className="active">
				<div className="icon">
					<i class="fa-solid fa-boxes-stacked"></i>
				</div>
				<li>Stories</li>
			</Link>
			<Link to={"./reels"}>
				<div className="icon">
					<i className="fa-solid fa-play"></i>
				</div>
				<li>Reels</li>
			</Link>
			<Link to={"./info"}>
				<div className="icon">
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
				<li>Info</li>
			</Link>
		</ul>
	);
};

export default InstaNav;
