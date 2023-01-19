import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Steps from "../Atoms/Steps";
import "./NavH.css";
const NavH = () => {
	const [step, setStep] = useRecoilState(Steps);
	useEffect(() => {
		let steps = document.querySelectorAll(".Nav-H ul li");
		if (step !== null) {
			steps[step].style.color = "var(--Pewter)";
		}
	}, [step]);
	return (
		<div className="Nav-H col-12 me-0 pe-0">
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid row">
					<span className="col-1 text-center">Paste & GO</span>
					<ul className="col-11 d-flex justify-content-around align-items-center m-0 list-style-none">
						<li>Paste</li>
						<li>Select</li>
						<li>GO</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default NavH;
