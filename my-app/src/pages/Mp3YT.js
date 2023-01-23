import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import YtId from "../Atoms/YtId";
import Steps from "../Atoms/Steps";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Mp3YT = () => {
	const [data, setData] = useState([]);
	const [info, setInfo] = useState([]);
	const [isError, setIsError] = useState(false);
	const [videoID, setVideoId] = useRecoilState(YtId);
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
			navigate("/youtube");
		}, 1000);
	};
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
				response.status === 200
					? setData(response.data)
					: Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Something went wrong!",
							footer:
								'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					  });
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
				if (response.status === 200) {
					if ("error" in response.data) {
						setIsError(true);
					} else {
						setInfo(response.data);
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
				) : isError === false ? (
					<div className="downloadCard w-75 h-100 p-2 d-flex align-items-center justify-content-around flex-column">
						<div className="preview row w-100 h-50">
							{info.length === 0 ? (
								<div className="img col-md-6 col-lg-6 col-12">
									<div className="spinner-grow" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								</div>
							) : (
								<img
									className="col-md-6 col-lg-6 col img-fluid"
									src={info.result.thumbnail.url}
									alt=""
								/>
							)}
							<div className="des col-md-6 col-lg-6 col d-flex justify-content-between flex-column">
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
								target="_self"
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
export default Mp3YT;
