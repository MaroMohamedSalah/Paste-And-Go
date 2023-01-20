import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";

const Mp3YT = () => {
	const [videoID, setVideoId] = useRecoilState(YtId);
	const [data, setData] = useState([]);
	const [info, setInfo] = useState([]);
	const [step, setStep] = useRecoilState(Steps);
	const downloadLink = () => {
		const options = {
			method: "GET",
			url: "https://youtube-mp36.p.rapidapi.com/dl",
			params: { id: videoID },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				response.status === 200 && setData(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const getVideoInfo = () => {
		const options = {
			method: "GET",
			url: "https://simple-youtube-search.p.rapidapi.com/video",
			params: { search: `https://youtu.be/${videoID}` },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				response.status === 200 && setInfo(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	useEffect(() => {
		downloadLink();
		getVideoInfo();
	}, []);
	return (
		<div className="Mp3 h-100">
			<div className="h-100 d-flex justify-content-center align-items-center">
				{data.length === 0 ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<div className="downloadCard w-75 h-100 p-2 d-flex align-items-center justify-content-around flex-column">
						<div className="preview row">
							{info.length === 0 ? (
								<div className="img col-6">
									<div className="spinner-grow" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								</div>
							) : (
								<img className="col-6" src={info.result.thumbnail.url} alt="" />
							)}
							<div className="des col-6 d-flex justify-content-between flex-column">
								<div className="title fs-2">{data.title}</div>
								<p className="info" aria-hidden="true">
									Duration:{" "}
									{info.length === 0 ? (
										<span className="placeholder col-2"></span>
									) : (
										info.result.duration_formatted
									)}
								</p>
							</div>
						</div>
						<div className="download-selection w-100 justify-content-center row">
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								className="btn col-3 m-2 w-100"
								onClick={() => setStep(2)}
							>
								<h5 className="z-3 position-relative">Download MP3</h5>
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Mp3YT;
