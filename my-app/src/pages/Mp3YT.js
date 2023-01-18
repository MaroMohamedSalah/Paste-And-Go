import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import YtId from "../Atoms/YtId";

const Mp3YT = () => {
	const [videoID, setVideoId] = useRecoilState(YtId);
	const [data, setData] = useState([]);
	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
			params: { id: videoID },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	return (
		<div className="Mp3 h-100">
			<div className="h-100 d-flex justify-content-center align-items-center">
				{data.length === 0 ? (
					<div className="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				) : (
					<div className="downloadCard">
						<div className="preview">
							<img src={data.thumbnail[1].url} alt="" />
						</div>
						<div className="title">{data.title}</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Mp3YT;
