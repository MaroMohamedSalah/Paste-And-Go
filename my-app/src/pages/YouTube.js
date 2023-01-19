import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./YouTube.css";
import { useRecoilState } from "recoil";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";
const YouTube = () => {
	const [step, setStep] = useRecoilState(Steps);
	const [valid, setValid] = useState("");
	const [error, setError] = useState("");
	const [videoID, setVideoId] = useRecoilState(YtId);
	const handelValidURL = (e) => {
		if (e.length !== 0) {
			let v =
				/(^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$)/gm.test(
					e
				);
			v === true ? setValid("yes") : setValid("no");
			let id = e
				.replace(/(>|<)/gi, "")
				.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2];
			v === true && setVideoId(id);
		} else {
			setValid("empty");
		}
	};
	useEffect(() => {
		const qualityBtns = document.querySelectorAll(".Youtube form div");
		const UrlInput = document.querySelector(".Youtube form input");
		UrlInput.value.length === 0 && setStep(null);
		valid === "no" || valid === "empty"
			? (UrlInput.style.borderColor = "#ff3333")
			: (UrlInput.style.borderColor = "var(--BlueGray)");
		qualityBtns.forEach((element) => {
			if (valid === "yes") {
				element.style.opacity = "1";
				element.style.pointerEvents = "all";
			} else if (valid === "no") {
				element.style.opacity = "0";
				element.style.pointerEvents = "none";
				setError(`Invalid Youtube video URL`);
			} else if (valid === "empty") {
				setError("Can't be Empty");
				element.style.opacity = "0";
				element.style.pointerEvents = "none";
			}
		});
	}, [valid, videoID]);
	return (
		<div className="Youtube">
			<form className="youtube-url media row w-lg-50 w-md-50 w-sm-90">
				<input
					type="text"
					id="youTube"
					name="youTube"
					className="col-12 "
					required
					onPaste={() => setStep(0)}
					onChange={(e) => {
						handelValidURL(e.target.value);
						setStep(0);
					}}
				/>
				<label htmlFor="youTube">URL</label>
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
					<Link to={"mp3"}>
						<button type="submit">MP3</button>
					</Link>
				</div>
				<div className="MP4 col-lg-6 col-12">
					<Link>
						<button type="submit">MP4</button>
					</Link>
				</div>
			</form>
		</div>
	);
};
export default YouTube;
