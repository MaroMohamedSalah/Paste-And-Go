import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Active from "../Atoms/Active";
import "./Setting.css";

const Setting = () => {
	const [active, setActive] = useRecoilState(Active);
	useEffect(() => {
		const select = document.querySelectorAll(".Setting ul li .select");
		select.forEach((e) => {
			e === select[active] ? (e.style.opacity = "1") : (e.style.opacity = "0");
		});
		select[active].style.opacity = "1";
	}, [active]);
	return (
		<div
			className="offcanvas offcanvas-top Setting"
			tabIndex="-1"
			id="offcanvasTop"
			aria-labelledby="offcanvasTopLabel"
		>
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasTopLabel">
					Which one you used to download videos from?
				</h5>
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<ul className="select">
					<li
						onClick={() => {
							localStorage.setItem("Active", "0");
							setActive("0");
						}}
					>
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-solid fa-circle-check select"></i>
					</li>
					<li
						onClick={() => {
							localStorage.setItem("Active", "1");
							setActive("1");
						}}
					>
						<i className="fa-brands fa-facebook-f"></i>
						<i className="fa-solid fa-circle-check select"></i>
					</li>
					<li
						onClick={(e) => {
							localStorage.setItem("Active", "2");
							setActive("2");
						}}
					>
						<i className="fa-brands fa-youtube"></i>
						<i className="fa-solid fa-circle-check select"></i>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Setting;
