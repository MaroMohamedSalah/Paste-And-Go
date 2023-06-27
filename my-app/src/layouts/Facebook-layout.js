import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Steps from "../Atoms/Steps";
import FacebookUrl from "../components/Facebook-url";

const FacebookLayout = () => {
	const [step, setStep] = useRecoilState(Steps);

	const handleStep = () => {
		setStep(1);
	};

	return (
		<div className="Facebook urlGetter">
			<form className="facebook-url media row w-lg-50 w-md-50 w-sm-90">
				<FacebookUrl />
				<div className="MP3 col-lg-6 col-12 p-sm-5">
					<Link to="mp3" onClick={handleStep}>
						<button type="button">MP3</button>
					</Link>
				</div>
				<div className="MP3 col-lg-6 col-12 p-sm-5">
					<Link to="mp4" onClick={handleStep}>
						<button type="button">MP4</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default FacebookLayout;
