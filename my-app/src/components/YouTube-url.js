import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./URLgetter.css";
import { useRecoilState } from "recoil";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";
const YouTubeUrl = () => {
	const [step, setStep] = useRecoilState(Steps);
	const [videoID, setVideoId] = useRecoilState(YtId);
	const [valid, setValid] = useState("");
	const [error, setError] = useState("");
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
				setError(`Invalid Youtube video URL`);
				setStep(null);
			} else if (valid === "empty") {
				setError("Can't be Empty");
				element.style.opacity = "0";
				element.style.pointerEvents = "none";
				setStep(null);
			}
		});
	}, [valid, videoID]);
	return (
		<>
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
			<label htmlFor="youTube">YouTube URL</label>
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

export default YouTubeUrl;
