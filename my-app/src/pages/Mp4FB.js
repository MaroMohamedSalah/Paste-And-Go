import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import Steps from "../Atoms/Steps";
import FBurl from "../Atoms/FBurl";
import stillWorking from "../imgs/still working on it.gif";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Mp4FB = () => {
	const [data, setData] = useState([]);
	const [info, setInfo] = useState([]);
	const [isError, setIsError] = useState(false);
	const [url, setUrl] = useRecoilState(FBurl);
	const [step, setStep] = useRecoilState(Steps);
	const navigate = useNavigate();
	const handelError = () => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: `No result to download!`,
			footer: '<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
		});
		setTimeout(() => {
			navigate("/facebook");
		}, 1000);
	};
	const downloadLink = () => {
		const options = {
			method: "GET",
			url: "https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails",
			params: { URL: url },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					setData(response.data);
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer:
							'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					});
				}
				response.data.requested_formats[1].resolution !== "audio only" &&
					setIsError(true);
			})
			.catch(function (error) {
				if (error.request.readyState === 4) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Server Error!",
						footer:
							'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					});
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer:
							'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					});
				}
			});
	};
	useEffect(() => {
		downloadLink();
	}, []);
	return (
		<div className="Mp4 facebook-mp4 h-100">
			<div className="h-100 d-flex justify-content-center align-items-center">
				{data.length === 0 ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : isError === false ? (
					<div className="downloadCard w-75 h-100 p-2 d-flex align-items-center justify-content-around flex-column">
						<div className="preview row w-100">
							<img
								className="col-md-6 col-lg-6 col img-fluid"
								src={data.thumbnail}
								alt="Video"
							/>
							<div className="des col-md-6 col-lg-6 col d-flex justify-content-between flex-column">
								<div className="title fs-3">{data.title}</div>
								<ul className="info" aria-hidden="true">
									<li>Duration: {data.duration_string}</li>
									<li>By: {data.uploader}</li>
								</ul>
							</div>
						</div>
						<div className="download-selection w-100 justify-content-center row">
							<a
								href={data.requested_formats[1].url}
								rel="noopener noreferrer"
								target="_blank"
								className="btn col-3 m-2 w-100"
								onClick={(e) => {
									data.status === "fail" && e.preventDefault();
									data.status === "fail"
										? Swal.fire({
												icon: "error",
												title: "Oops...",
												text: "Long audio of more than 2 hr duration are not allowed",
										  })
										: setStep(2);
									data.status !== "fail" &&
										Swal.fire({
											position: "top-end",
											icon: "success",
											title: "Your MP3 has been downloaded",
											showConfirmButton: false,
											timer: 1500,
										});
								}}
							>
								<h5 className="z-3 position-relative">Download MP3</h5>
							</a>
						</div>
					</div>
				) : (
					handelError()
				)}
			</div>
		</div>
	);
};
export default Mp4FB;
