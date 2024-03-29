import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Steps from "../Atoms/Steps";
import FBurl from "../Atoms/FBurl";

const FacebookUrl = () => {
	const [step, setStep] = useRecoilState(Steps);
	const [url, setUrl] = useRecoilState(FBurl);
	const [valid, setValid] = useState("");
	const [error, setError] = useState("");
	const handelValidURL = (e) => {
		if (e.length !== 0) {
			let v = /^https?:\/\/(www\.facebook\.com|fb.watch)\/.+$/gm.test(e);
			setUrl(e);
			v === true ? setValid("yes") : setValid("no");
		} else {
			setValid("empty");
		}
	};
	useEffect(() => {
		const formatsBtns = document.querySelectorAll(".Facebook form div");
		const UrlInput = document.querySelector(".Facebook form input");
		UrlInput.value.length === 0 && setStep(null);
		valid === "no" || valid === "empty"
			? (UrlInput.style.borderColor = "#ff3333")
			: (UrlInput.style.borderColor = "var(--BlueGray)");
		formatsBtns.forEach((element) => {
			if (valid === "yes") {
				element.style.opacity = "1";
				element.style.pointerEvents = "all";
				setStep(0);
			} else if (valid === "no") {
				element.style.opacity = "0";
				element.style.pointerEvents = "none";
				setError(`Invalid FaceBook video URL`);
				setStep(null);
			} else if (valid === "empty") {
				setError("Can't be Empty");
				element.style.opacity = "0";
				element.style.pointerEvents = "none";
				setStep(null);
			}
		});
	}, [valid]);
	return (
		<>
			<input
				type="text"
				id="facebook"
				name="facebook"
				className="col-12 "
				required
				onChange={(e) => {
					handelValidURL(e.target.value);
				}}
			/>
			<label htmlFor="facebook">Facebook URL</label>
			<h3
				className={
					valid === "no" || valid === "empty" ? "error d-block" : "error d-none"
				}
			>
				{error} &#128578;
			</h3>
		</>
	);
};

export default FacebookUrl;
