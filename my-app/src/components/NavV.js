import { Form, Link } from "react-router-dom";
import "./NavV.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const NavV = () => {
	const tooltipTriggerList = document.querySelectorAll(
		'[data-bs-toggle="tooltip"]'
	);
	const renderTooltip = (props) => <Tooltip {...props}></Tooltip>;
	return (
		<div className="Nav-v col-lg-1 col-md-2 col-2 ">
			<ul>
				{/* <li className="logo">
					<img src="" alt="" />
				</li> */}
				<Link>
					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<li className="insta">
							<i class="fa-brands fa-instagram"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link>
					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<li className="face">
							<i class="fa-brands fa-facebook-f"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link>
					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<li className="youTube">
							<i class="fa-brands fa-youtube"></i>
						</li>
					</OverlayTrigger>
				</Link>
				<Link>
					<OverlayTrigger placement="right" overlay={renderTooltip}>
						<li className="language">AR</li>
					</OverlayTrigger>
				</Link>
			</ul>
			<div className="setting"></div>
		</div>
	);
};
export default NavV;
