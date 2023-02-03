import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import "./Setting.css";
import "./plan.css";
import plans from "../components/plans.json";
import Plan from "../Atoms/Plan";
import Swal from "sweetalert2";

const ShowPlans = () => {
	const [plan, setPlan] = useRecoilState(Plan);
	const [code, setCode] = useRecoilState(Plan);
	const [selectedPlan, setSelectedPlan] = useState("FREE");
	useEffect(() => {
		if (plan === Object.keys(plans)[0]) {
			setSelectedPlan("FREE");
		} else if (plan === Object.keys(plans)[1]) {
			setSelectedPlan("Pro");
		} else {
			setSelectedPlan("Ultra");
		}
		Object.keys(plans).map((p, i) => {
			if (p === plan) {
				console.log(p);
				console.log(Object.values(plans)[i]);
			}
		});
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
					Your Plan: <span className="yourPlan">{selectedPlan}</span>{" "}
					<span
						className="edit"
						onClick={() => {
							document.getElementById("btn-close").click(); // close Offcanvas
							Swal.fire({
								title: "Enter Your Plan Code",
								input: "text",
								inputAttributes: {
									autocapitalize: "off",
								},
								showCancelButton: true,
								confirmButtonText: "Done",
								showLoaderOnConfirm: true,
								preConfirm: (login) => {},
								allowOutsideClick: () => !Swal.isLoading(),
							}).then((result) => {
								if (result.isConfirmed) {
									let found = false;
									Object.keys(plans).forEach((p) => {
										if (result.value === p) {
											found = true;
											localStorage.setItem("plan", p);
											// setCode(result.value);
											Swal.fire({
												title: `Your plan has been saved`,
												// imageUrl: result.value.avatar_url,
											});
										}
									});
									found === false
										? Swal.fire({
												title: `Your code is not matched to any plan code!`,
												// imageUrl: result.value.avatar_url,
										  })
										: setCode(result.value);
								}
							});
						}}
					>
						<i class="fa-regular fa-pen-to-square"></i>
					</span>
				</h5>
				<button
					type="button"
					className="btn-close"
					id="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body plans-body">
				<h1 className="fs-5 "> Limits By Day: </h1>
				<ul className="limits">
					<li className="fs-6">
						Facebook Videos: <span>0 / 2</span>
					</li>
					<li className="fs-6">
						Youtube Videos: <span>0 / 2</span>
					</li>
					<li className="fs-6">
						Instagram Reels: <span>0 / 2</span>
					</li>
					<li className="fs-6">
						Instagram Stories: <span>0 / 2</span>
					</li>
					<li className="fs-6">
						Instagram Info: <span>0 / 2</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ShowPlans;
