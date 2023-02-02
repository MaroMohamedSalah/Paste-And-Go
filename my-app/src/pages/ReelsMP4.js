import { useRecoilState } from "recoil";
import ReelsURL from "../Atoms/ReelsURL";
import "./ig.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Steps from "../Atoms/Steps";
const ReelsMP4 = () => {
	const [url, setUrl] = useRecoilState(ReelsURL);
	const [step, setStep] = useRecoilState(Steps);
	const [reels, setReels] = useState([]);
	const getShortCode = (url) => {
		let u = url
			.match(
				/(?:https?:\/\/)?(?:www.)?instagram.com\/([reel]+)\/([a-zA-Z0-9\-\_\.]+)/g
			)
			.toString();
		return u.replace(/(>|<)/gi, "").split(/reel\//)[1];
	};
	const downloadLink = () => {
		const options = {
			method: "GET",
			url: "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id",
			params: { shortcode: getShortCode(url), response_type: "reels" },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					setReels(response.data);
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
		<div className="Reels IG">
			{reels.length === 0 ? (
				<p className="m-5 placeholder-glow">
					<h1>
						Username: <span className="placeholder col-5"></span>
					</h1>
					<h1>
						Full Name: <span className="placeholder col-5"></span>
					</h1>
					<h1>
						Views: <span className="placeholder col-5"></span>
					</h1>
					<h1>
						Likes: <span className="placeholder col-5"></span>
					</h1>
					<h1 className="placeholder col-7"></h1>
				</p>
			) : (
				<ul className="text-center">
					<li>
						Username: <span>{reels[0].items[0].user.username}</span>
					</li>
					<li>
						Full Name: <span>{reels[0].items[0].user.full_name}</span>
					</li>
					{reels[0].items[0].like_and_view_counts_disabled === false && (
						<li>
							Views: <span>{reels[0].items[0].view_count}</span>
						</li>
					)}
					{reels[0].items[0].like_and_view_counts_disabled === false && (
						<li>
							Likes: <span>{reels[0].items[0].like_count}</span>
						</li>
					)}
					<li>
						{reels[0].items[0].user.is_private === true ? (
							<span> Private </span>
						) : (
							<span> Public </span>
						)}
					</li>
				</ul>
			)}
			<div className="data d-flex justify-content-center align-items-center">
				{reels.length === 0 ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<div className="downloadCard">
						<p className="caption text-center">
							{"caption" in reels[0].items[0] && reels[0].items[0].caption.text}
						</p>
						<div className="download-selection">
							<a
								href={reels[0].items[0].video_versions[0].url}
								rel="noopener noreferrer"
								target="_blank"
								className="btn col-3 m-2 w-100"
								onClick={(e) => {
									setStep(2);
									Swal.fire({
										position: "top-end",
										icon: "success",
										title: "Your Reel has been downloaded",
										showConfirmButton: false,
										timer: 1500,
									});
								}}
							>
								<h5 className="z-3 position-relative">Download MP4</h5>
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ReelsMP4;
