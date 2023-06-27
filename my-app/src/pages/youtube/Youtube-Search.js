import { useRecoilState } from "recoil";
import SearchInput from "../../components/Search-input";
import SearchResult from "../../Atoms/Search-result";
import AOS from "aos";
import { useEffect, useState } from "react";
import "./Search.css";
import Swal from "sweetalert2";
import axios from "axios";

const YoutubeSearch = () => {
	const [result, setResult] = useRecoilState(SearchResult);
	const [videos, setVideos] = useState([]);

	const downloadVideoMp3 = (videoID) => {
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
					? window.open(response.data.link)
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
					text: error,
					footer:
						'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
				});
			});
	};

	const downloadLinkMp4 = (videoID) => {
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
				if (response.status === 200) {
					if ("error" in response.data) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Something went wrong!",
							footer:
								'<a href="https://wa.me/+2001102654851">Contact the owner?</a>',
						});
					} else {
						window.open(response.data.link);
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

	const handelPobUp = (video) => {
		Swal.fire({
			title: video.title,
			text: `Channel: ${video.channel.name}`,
			imageUrl: video.thumbnail.url,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "Custom video image",
			showCancelButton: true,
			confirmButtonText: "MP3",
			cancelButtonText: "MP4",
			showCloseButton: true,
			focusConfirm: false,
			focusCancel: false,
		}).then((result) => {
			if (result.isConfirmed) {
				// MP3 button clicked, handle MP3 logic
				downloadVideoMp3(video.id);
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				// MP4 button clicked, handle MP4 logic
				// downloadLinkMp4(video.id);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Still Working On It!",
					footer:
						'<a href="https://wa.me/+2001102654851">Contact the developer?</a>',
				});
			} else {
				// Modal dismissed without clicking a button
				// Add your code here to handle this case
			}
		});
	};

	useEffect(() => {
		setVideos(result.results);
	}, [result, videos]);

	return (
		<div className="Search urlGetter">
			<div className="youtube-url media row w-lg-50 w-md-50 w-sm-90 mb-2">
				<SearchInput />
			</div>
			<div className="container">
				<div
					className="result row"
					style={{ maxHeight: "50vh", overflowY: "scroll" }}
				>
					{result.error
						? null
						: videos !== undefined &&
						  videos.map((video) => (
								<div
									className="col-12 col-md-3 p-2"
									key={video.id}
									onClick={() => handelPobUp(video)}
								>
									<div className="customCard ms-0 p-3 shadow-lg w-100">
										<div className="image">
											<img
												src={video.thumbnail.url}
												alt=""
												className="img-fluid h-100"
											/>
										</div>
										<div>
											<div className="col-12 itemTitle">{video.title}</div>
											<div className="col-12 itemTime">{video.uploadedAt}</div>
										</div>
									</div>
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default YoutubeSearch;
