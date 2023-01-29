import { Link } from "react-router-dom";
import "./NavV.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Active from "../Atoms/Active";
import Setting from "../pages/Setting";
import "animate.css";
import ShowPlans from "../pages/ShowPlans";
const NavV = () => {
	const [active, setActive] = useRecoilState(Active);
	const [clickCount, setClickCount] = useState(0);
	const tooltipTriggerList = document.querySelectorAll(
		'[data-bs-toggle="tooltip"]'
	);
	const renderTooltipInsta = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Download from Instagram
		</Tooltip>
	);
	const renderTooltipFace = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Download from Facebook
		</Tooltip>
	);
	const renderTooltipYouTube = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Download from YouTube
		</Tooltip>
	);
	const renderTooltipSetting = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Setting
		</Tooltip>
	);
	localStorage.getItem("Active") !== null &&
		setActive(localStorage.getItem("Active"));

	// use Effect for Active
	useEffect(() => {
		let instagram = document.querySelector(".insta");
		let facebook = document.querySelector(".face");
		let youTube = document.querySelector(".youTube");
		instagram.onclick = (e) => {
			instagram.style.color = "#c13584";
			facebook.style.color = "var(--Pewter)";
			youTube.style.color = "var(--Pewter)";
			setActive(instagram.id);
		};
		facebook.onclick = () => {
			facebook.style.color = "#4267b2";
			instagram.style.color = "var(--Pewter)";
			youTube.style.color = "var(--Pewter)";
			setActive(facebook.id);
		};
		youTube.onclick = () => {
			youTube.style.color = "#ff0000";
			instagram.style.color = "var(--Pewter)";
			facebook.style.color = "var(--Pewter)";
			setActive(youTube.id);
		};
		document.querySelectorAll("#socialMediaList a")[active].click();
	}, [active]);

	// useEffect for clickCount
	useEffect(() => {
		if (window.matchMedia("(max-width: 700px)").matches) {
			document.querySelectorAll("#socialMediaList a").forEach((e) => {
				clickCount === 0
					? (e.style.fontSize = "1em")
					: (e.style.fontSize = "2em");
			});
			clickCount === 0
				? (document.querySelector(".plans").style.opacity = "0")
				: (document.querySelector(".plans").style.opacity = "1");
		}
	}, [clickCount]);
	return (
		<div
			className={
				clickCount === 0
					? "Nav-v col-lg-1 col-md-2 col-1 animate__headShake"
					: "Nav-v col-lg-1 col-md-2 col-3"
			}
		>
			<div
				className="drag d-md-none d-lg-none d-sm-block"
				onClick={() => {
					clickCount === 0 ? setClickCount(1) : setClickCount(0);
				}}
			>
				{clickCount === 0 ? (
					<i className="fa-solid fa-chevron-right"></i>
				) : (
					<i className="fa-solid fa-xmark"></i>
				)}
			</div>
			<ul id="socialMediaList">
				<Link id="0" className="insta" to={"/"}>
					<OverlayTrigger placement="right" overlay={renderTooltipInsta}>
						<li>
							<i className="fa-brands fa-instagram"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link id="1" className="face" to={"/facebook"}>
					<OverlayTrigger placement="right" overlay={renderTooltipFace}>
						<li>
							<i className="fa-brands fa-facebook-f"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link id="2" className="youTube" to={"/youtube"}>
					<OverlayTrigger placement="right" overlay={renderTooltipYouTube}>
						<li>
							<i className="fa-brands fa-youtube"></i>
						</li>
					</OverlayTrigger>
				</Link>
			</ul>
			<Link
				className="plans"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasTop2"
				aria-controls="offcanvasTop2"
			>
				Plans
			</Link>
			<div className="setting">
				<OverlayTrigger placement="right" overlay={renderTooltipSetting}>
					<i
						className="fa-solid fa-gear set"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasTop"
						aria-controls="offcanvasTop"
					></i>
				</OverlayTrigger>
			</div>
			<Setting />
			<ShowPlans />
		</div>
	);
};
export default NavV;
