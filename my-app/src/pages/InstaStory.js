import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./URLgetter.css";
import "./download.css";
import { useRecoilState } from "recoil";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";
import UserNameIG from "../Atoms/UserNameIG";
import Swal from "sweetalert2";
const InstaStory = () => {
	const [step, setStep] = useRecoilState(Steps);
	const [userName, setUserName] = useRecoilState(UserNameIG);
	const [valid, setValid] = useState("");
	const [error, setError] = useState("");
	const handelValidURL = (e) => {
		if (e.length !== 0) {
			let v = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(e);
			v === true ? setValid("yes") : setValid("no");
			valid === "yes" && setUserName(e);
		} else {
			setValid("empty");
		}
	};
	useEffect(() => {
		const formatsBtns = document.querySelectorAll(".InstaStory form div");
		const UrlInput = document.querySelector(".InstaStory form input");
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
				setError(`Invalid Instagram username`);
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
		<div className="InstaStory urlGetter">
			<form className="instaStory-url media row w-lg-50 w-md-50 w-sm-90">
				<input
					type="text"
					id="instaStory"
					name="instaStory"
					className="col-12 "
					required
					onChange={(e) => {
						handelValidURL(e.target.value);
					}}
				/>
				<label htmlFor="instaStory">UserName</label>
				<h3
					className={
						valid === "no" || valid === "empty"
							? "error d-block"
							: "error d-none"
					}
				>
					{error} &#128578;
				</h3>
				<div className="MP3 col-lg-6 col-12 p-sm-5">
					<Link to={"mp4"} onClick={() => setStep(1)}>
						<button type="submit">Highlights</button>
					</Link>
				</div>
				<div className="MP4 col-lg-6 col-12 p-sm-5">
					<Link to={"mp4"} onClick={() => setStep(1)}>
						<button type="submit">Stories</button>
					</Link>
				</div>
			</form>
		</div>
	);
};
export default InstaStory;
