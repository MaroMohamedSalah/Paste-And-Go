import { useRecoilState } from "recoil";
import UserNameIG from "../../Atoms/UserNameIG";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Steps from "../../Atoms/Steps";
import "./ig.css";
import "./GetInfo.css";

const GetInfo = () => {
	const [username, setUserName] = useRecoilState(UserNameIG);
	const [step, setStep] = useRecoilState(Steps);
	const [info, setInfo] = useState([]);

	const downloadLink = () => {
		const options = {
			method: "GET",
			url: "https://instagram210.p.rapidapi.com/ig_profile",
			params: { ig: username },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "instagram210.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					setInfo(response.data);
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
		<div className="info IG">
			{info.length === 0 ? (
				<div className="loading d-flex justify-content-center align-items-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<>
					<ul className="basicInfo m-md-5 m-0">
						<li>
							Username: <span>{info[0].username}</span>
						</li>
						<li>
							Full Name: <span>{info[0].full_name}</span>
						</li>
						<li>
							Category: <span>{info[0].category}</span>
						</li>
					</ul>
					<ul className="follow m-md-5 m-0">
						<li>
							Followers:{" "}
							<span>
								{info[0].follower_count > 1000
									? Math.round(info[0].follower_count / 1000)
									: info[0].follower_count}
							</span>
							{info[0].follower_count > 1000 && " K"}
						</li>
						<li>
							Following:{" "}
							<span>
								<span>
									{info[0].following_count > 1000
										? Math.round(info[0].following_count / 1000)
										: info[0].following_count}
								</span>
								{info[0].following_count > 1000 && " K"}
							</span>
						</li>
					</ul>
					<ul className="secondaryInfo m-md-5">
						{info[0].is_verified === true && (
							<li>
								Verified{" "}
								<span>
									<i className="fa-solid fa-certificate"></i>
								</span>
							</li>
						)}
						{info[0].is_private === true ? (
							<li>
								Private{" "}
								<span>
									<i className="fa-solid fa-lock"></i>
								</span>
							</li>
						) : (
							<li>
								Public{" "}
								<span>
									<i className="fa-solid fa-unlock"></i>
								</span>
							</li>
						)}

						{info[0].is_business === true && (
							<li>
								Business{" "}
								<span>
									<i className="fa-solid fa-user-tie"></i>
								</span>
							</li>
						)}

						{info[0].is_professional === true && (
							<li>
								Professional{" "}
								<span>
									<i className="fa-solid fa-mug-hot"></i>
								</span>
							</li>
						)}
						{info[0].is_new_to_instagram === true && (
							<li>
								New in Instagram{" "}
								<span>
									<i className="fa-regular fa-face-smile"></i>
								</span>
							</li>
						)}
					</ul>
					<div className="bio m-5">
						<h3>Bio:</h3>
						<p>{info[0].biography}</p>
					</div>
					<div className="bio m-5">
						<h3>External Link:</h3>
						<p>
							<a
								className="text-decoration-none"
								href={info[0].external_lynx_url}
								target={"_blank"}
								rel="noreferrer"
							>
								Here <i className="fa-solid fa-link"></i>
							</a>
						</p>
					</div>
					<ul className="basicInfo m-5">
						<li>
							Highlights Count: <span>{info[0].highlight_reel_count}</span>
						</li>
						<li>
							Media Count: <span>{info[0].media_count}</span>
						</li>
					</ul>
					<div className="d-flex justify-content-center align-items-center w-100 my-5">
						<a
							href={info[0].profile_pic_url_hd}
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							<button className="btn btn-primary picBtn">
								View & Download Profile Pic
							</button>
						</a>
					</div>
				</>
			)}
		</div>
	);
};

export default GetInfo;
