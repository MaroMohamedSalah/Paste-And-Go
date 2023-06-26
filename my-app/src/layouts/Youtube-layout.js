import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Steps from "../Atoms/Steps";
import YouTubeUrl from "../components/YouTube-url";
const YouTubeLayout = () => {
	const [step, setStep] = useRecoilState(Steps);
	return (
		<div className="Youtube urlGetter">
			<form className="youtube-url media row w-lg-50 w-md-50 w-sm-90">
				<YouTubeUrl />
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
export default YouTubeLayout;
