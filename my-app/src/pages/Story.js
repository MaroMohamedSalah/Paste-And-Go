import { useRecoilState } from "recoil";
import UserNameIG from "../Atoms/UserNameIG";
import "./ig.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Steps from "../Atoms/Steps";
const Story = () => {
	const [userName, setUserName] = useRecoilState(UserNameIG);
	const [step, setStep] = useRecoilState(Steps);
	const [stories, setStories] = useState([]);
	// const downloadLink = () => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://instagram-story-downloader-media-downloader.p.rapidapi.com/story/index",
	// 		params: { url: userName },
	// 		headers: {
	// 			"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
	// 			"X-RapidAPI-Host":
	// 				"instagram-story-downloader-media-downloader.p.rapidapi.com",
	// 			"Access-Control-Allow-Origin": "*",
	// 			"Access-Control-Allow-Headers": "*",
	// 			"Access-Control-Allow-Credentials": "true",
	// 			Vary: "Origin",
	// 		},
	// 	};

	// 	axios
	// 		.request(options)
	// 		.then(function (response) {
	// 			if (response.status === 200) {
	// 				response.data.Status === "Error"
	// 					? Swal.fire({
	// 							icon: "error",
	// 							title: "Oops...",
	// 							text: response.data.Msg,
	// 							footer:
	// 								'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
	// 					  })
	// 					: setStories(response.data);
	// 			} else {
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "Oops...",
	// 					text: "Something went wrong!",
	// 					footer:
	// 						'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
	// 				});
	// 			}
	// 		})
	// 		.catch(function (error) {
	// 			if (error.request.readyState === 4) {
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "Oops...",
	// 					text: "Server Error!",
	// 					footer:
	// 						'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
	// 				});
	// 			} else {
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "Oops...",
	// 					text: "Something went wrong!",
	// 					footer:
	// 						'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
	// 				});
	// 			}
	// 		});
	// };
	const downloadLink = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host":
					"instagram-story-downloader-media-downloader.p.rapidapi.com",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
			},
		};

		fetch(
			`https://instagram-story-downloader-media-downloader.p.rapidapi.com/story/index?url=${userName}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setStories(response))
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		downloadLink();
	}, []);
	return (
		<div className="Story IG">
			<h1 className="text-center">
				<span>{stories.length !== 0 && stories.stories.length}</span> stories
				are ready to download from <span>{userName}</span>!
			</h1>
			<div className="data d-flex justify-content-center align-items-center">
				{stories.length === 0 ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					stories.stories.map((s, i) => {
						return (
							<div className="downloadCard" key={i}>
								<img
									crossOrigin="anonymous"
									// src={s.thumbnail}
									src="https://instagram.fdel52-1.fna.fbcdn.net/v/t51.2885-19/281440578_1088265838702675_6233856337905829714_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel52-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=YwdZ54Rm4WAAX9442RK&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfB-KcgGBH7qt0jW3-5bT9Ay6m993xrW_Q0-jR3I5g0fBg&oe=63DF81D8&_nc_sid=a9513d"
									alt="thumbnail"
								/>
								<a
									href={s.media}
									rel="noopener noreferrer"
									target="_blank"
									className="btn col-3 m-2 w-100"
									onClick={(e) => {
										setStep(2);
										Swal.fire({
											position: "top-end",
											icon: "success",
											title: "Your Story has been downloaded",
											showConfirmButton: false,
											timer: 1500,
										});
									}}
								>
									<h5 className="z-3 position-relative">Download MP3</h5>
								</a>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Story;
