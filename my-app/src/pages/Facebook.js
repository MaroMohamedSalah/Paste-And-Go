import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./URLgetter.css";
import "./download.css";
import { useRecoilState } from "recoil";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";
import FBurl from "../Atoms/FBurl";
const Facebook = () => {
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
		const formatsBtns = document.querySelectorAll(".Youtube form div");
		const UrlInput = document.querySelector(".Youtube form input");
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
		<div className="Youtube urlGetter">
			<form className="youtube-url media row w-lg-50 w-md-50 w-sm-90">
				<input
					type="text"
					id="youTube"
					name="youTube"
					className="col-12 "
					required
					onChange={(e) => {
						handelValidURL(e.target.value);
					}}
				/>
				<label htmlFor="youTube">FaceBook URL</label>
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
					<Link to={"mp3"} onClick={() => setStep(1)}>
						<button type="submit">MP3</button>
					</Link>
				</div>
				<div className="MP3 col-lg-6 col-12 p-sm-5">
					<Link to={"mp4"} onClick={() => setStep(1)}>
						<button type="submit">MP4</button>
					</Link>
				</div>
			</form>
		</div>
	);
};
export default Facebook;
