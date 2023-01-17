import { useEffect, useState } from "react";
import "./YouTube.css";
const YouTube = () => {
	const [valid, setValid] = useState("");
	const [error, setError] = useState("");
	const [URL, setURL] = useState("");
	const handelValidURL = (e) => {
		if (e.length !== 0) {
			let v =
				/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
					e
				);
			v === true ? setValid("yes") : setValid("no");

			v === true && setURL(e);
		} else {
			setValid("empty");
		}
	};
	useEffect(() => {
		const qualityBtns = document.querySelectorAll(".Youtube form div");
		const UrlInput = document.querySelector(".Youtube form input");
		valid === "no" || valid === "empty"
			? (UrlInput.style.borderColor = "#ff3333")
			: (UrlInput.style.borderColor = "var(--BlueGray)");
		qualityBtns.forEach((element) => {
			if (valid === "yes") {
				element.style.opacity = "1";
			} else if (valid === "no") {
				element.style.opacity = "0";
				setError(`Invalid URL`);
			} else if (valid === "empty") {
				setError("Can't be Empty");
				element.style.opacity = "0";
			}
		});
	}, [valid]);
	return (
		<div className="Youtube">
			<form className="youtube-url media row">
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
				<div className="MP3 col-6">
					<button type="submit">MP3</button>
				</div>
				<div className="MP4 col-6">
					<button type="submit">MP4</button>
				</div>
			</form>
		</div>
	);
};
export default YouTube;
