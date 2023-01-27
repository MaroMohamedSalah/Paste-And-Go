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
			url: "https://fastest-social-video-and-image-downloader.p.rapidapi.com/youtube",
			params: { url: url },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host":
					"fastest-social-video-and-image-downloader.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					if (response.data.success === false) {
						setIsError(true);
						setData(response.data);
					} else {
						setIsError(false);
						setData(response.data);
					}
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer:
							'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					});
				}
			})
			.catch(function (error) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
					footer:
						'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
				});
			});
	};
	const getVideoInfo = () => {};
	useEffect(() => {
		downloadLink();
		// getVideoInfo();
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
						<div className="preview row w-100 h-50">
							{/* {info.length === 0 ? (
								<div className="img col-md-6 col-lg-6 col-12 h-100">
									<div className="spinner-grow" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								</div>
							) : ( */}
							<img
								className="col-md-6 col-lg-6 col img-fluid"
								src={data.thumbnail}
								alt=""
							/>
							{/* )} */}
							<div className="des col-md-6 col-lg-6 col d-flex justify-content-between flex-column">
								<div className="title fs-2">{data.title}</div>
								{/* <p className="info" aria-hidden="true">
									Duration:{" "}
									{info.length === 0 ? (
										<span className="placeholder col-2"></span>
									) : (
										info.result.duration_formatted
									)}
								</p> */}
							</div>
						</div>
						<div className="download-selection w-100 justify-content-center row">
							{data.data.map((f) => {
								return (
									<a
										download={"marwan.mp4"}
										rel="noopener noreferrer"
										href={f}
										target="_blank"
										className="btn col-md-3 col-lg-3 col m-2"
										onClick={(e) => {
											setStep(2);
										}}
									>
										<h5 className="z-3 position-relative">test</h5>
									</a>
								);
							})}
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
