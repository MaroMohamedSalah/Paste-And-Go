import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Active from "../Atoms/Active";
import "./Setting.css";
import plans from "../components/plans.json";
import Plan from "../Atoms/Plan";

const ShowPlans = () => {
	const [plan, setPlan] = useRecoilState(Plan);
	const [selectedPlan, setSelectedPlan] = useState("FREE");
	useEffect(() => {
		if (plan === Object.keys(plans)[0]) {
			setSelectedPlan("FREE");
		} else if (plan === Object.keys(plans)[1]) {
			setSelectedPlan("Bro");
		} else {
			setSelectedPlan("Ultra");
		}
		Object.keys(plans).map((p, i) => {
			if (p === plan) {
				console.log(p);
				console.log(Object.values(plans)[i]);
			}
		});
		// console.log(Object.values(plans));
	}, [plan]);
	return (
		<div
			className="offcanvas offcanvas-top Setting"
			tabIndex="-1"
			id="offcanvasTop2"
			aria-labelledby="offcanvasTopLabel"
		>
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasTopLabel">
					Your Plan: <span>{selectedPlan}</span>
				</h5>
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body"></div>
		</div>
	);
};

export default ShowPlans;
