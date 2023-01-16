import { Link } from "react-router-dom";
import "./NavV.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useEffect, useState } from "react";
const NavV = () => {
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
	useEffect(() => {
		let instagram = document.querySelector(".insta");
		let facebook = document.querySelector(".face");
		let youTube = document.querySelector(".youTube");
		instagram.style.color = "#c13584";
		instagram.onclick = () => {
			instagram.style.color = "#c13584";
			facebook.style.color = "var(--Pewter)";
			youTube.style.color = "var(--Pewter)";
		};
		facebook.onclick = () => {
			facebook.style.color = "#4267b2";
			instagram.style.color = "var(--Pewter)";
			youTube.style.color = "var(--Pewter)";
		};
		youTube.onclick = () => {
			youTube.style.color = "#ff0000";
			instagram.style.color = "var(--Pewter)";
			facebook.style.color = "var(--Pewter)";
		};

		console.log(document.querySelectorAll("#socialMediaList a"));
		document.querySelectorAll("#socialMediaList a").forEach((e) => {
			clickCount === 0
				? (e.style.fontSize = "1.75em")
				: (e.style.fontSize = "2em");
		});
	}, [clickCount]);
	const handelClick = () => {
		clickCount === 0 ? setClickCount(1) : setClickCount(0);
		if (clickCount === 0) {
			setClickCount(1);
		}
	};
	return (
		<div
			className={
				clickCount === 0
					? "Nav-v col-lg-1 col-md-2 col-1"
					: "Nav-v col-lg-1 col-md-2 col-3"
			}
		>
			<div
				className="drag d-md-none d-lg-none d-sm-block"
				onClick={handelClick}
			>
				{clickCount === 0 ? (
					<i className="fa-solid fa-chevron-right"></i>
				) : (
					<i className="fa-solid fa-xmark"></i>
				)}
			</div>
			<ul id="socialMediaList">
				<Link className="insta" to={"/"}>
					<OverlayTrigger placement="right" overlay={renderTooltipInsta}>
						<li>
							<i className="fa-brands fa-instagram"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link className="face" to={"/facebook"}>
					<OverlayTrigger placement="right" overlay={renderTooltipFace}>
						<li>
							<i className="fa-brands fa-facebook-f"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link className="youTube" to={"/youtube"}>
					<OverlayTrigger placement="right" overlay={renderTooltipYouTube}>
						<li>
							<i className="fa-brands fa-youtube"></i>
						</li>
					</OverlayTrigger>
				</Link>
			</ul>
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
			<div
				className="offcanvas offcanvas-top"
				tabIndex="-1"
				id="offcanvasTop"
				aria-labelledby="offcanvasTopLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasTopLabel">
						Setting
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">...</div>
			</div>
		</div>
	);
};
export default NavV;
