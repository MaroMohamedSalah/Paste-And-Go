import { useRecoilState } from "recoil";
import UserNameIG from "../../Atoms/UserNameIG";
import "./ig.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Steps from "../../Atoms/Steps";

const Story = () => {
	const [username, setUserName] = useRecoilState(UserNameIG);
	const [step, setStep] = useRecoilState(Steps);
	const [stories, setStories] = useState([]);
	const [id, setID] = useState("");

	// Function to get the user ID based on the provided username
	const getUserID = () => {
		const options = {
			method: "GET",
			url: `https://instagram174.p.rapidapi.com/api/v1/user/${username}/id`,
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "instagram174.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.data.status === "ok") {
					setID(response.data.result);
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "User Not Found!",
						footer:
							'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
					});
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	// Function to make the API call and fetch the story data
	const downloadLink = () => {
		const options = {
			method: "POST",
			url: "https://rocketapi-for-instagram.p.rapidapi.com/instagram/user/get_stories",
			headers: {
				"content-type": "application/json",
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "rocketapi-for-instagram.p.rapidapi.com",
			},
			data: `{"ids":[${id}]}`,
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					setStories(response.data);
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
		getUserID();
		id !== "" && downloadLink();
	}, [id]);

	return (
		<div className="stories IG">
			{stories.length === 0 ? (
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
				stories.response.body.reels_media.length !== 0 && (
					<ul className="text-center">
						<li>
							Username:{" "}
							<span>{stories.response.body.reels_media[0].user.username}</span>
						</li>
						<li>
							Full Name:{" "}
							<span>{stories.response.body.reels_media[0].user.full_name}</span>
						</li>
						<li>
							Number Of Stories:{" "}
							<span>{stories.response.body.reels_media[0].media_count}</span>
						</li>
						<li>
							{stories.response.body.reels_media[0].user.is_private === true ? (
								<span> Private </span>
							) : (
								<span> Public </span>
							)}
						</li>
						<li>
							{stories.response.body.reels_media[0].user.is_verified ===
								true && (
								<span>
									{" "}
									Verified <i class="fa-solid fa-certificate"></i>
								</span>
							)}
						</li>
					</ul>
				)
			)}
			<div className="data d-flex justify-content-center align-items-center">
				{stories.length === 0 ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<div className="downloadCard">
						<div className="download-selection">
							{stories.response.body.reels_media.length === 0 ? (
								<h1 className="text-center error">
									{" "}
									This Username Does Not Have Any Videos In His Story
								</h1>
							) : (
								stories.response.body.reels_media[0].items.map((s, i) => {
									return (
										"video_versions" in s && (
											<a
												key={i}
												href={s.video_versions[0].url}
												rel="noopener noreferrer"
												target="_blank"
												className="btn col-3 mt-2 mb-2 w-100"
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
												<h5 className="z-3 position-relative">
													View & Download Story Number: {i + 1}
												</h5>
											</a>
										)
									);
								})
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Story;
