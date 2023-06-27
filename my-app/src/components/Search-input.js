import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Steps from "../Atoms/Steps";
import "./URLgetter.css";
import SearchResult from "../Atoms/Search-result";
import axios from "axios";

const SearchInput = () => {
	const [step, setStep] = useRecoilState(Steps);
	const [result, setResult] = useRecoilState(SearchResult);
	const [hasError, setHasError] = useState(false);
	// const [error, setError] = useState("");
	const getResult = async (searchKey) => {
		const options = {
			method: "GET",
			url: "https://simple-youtube-search.p.rapidapi.com/search",
			params: {
				query: searchKey,
				safesearch: "false",
			},
			headers: {
				"X-RapidAPI-Key": "251033cf4emshf3054a8b4557678p1fac0ajsn81864a3c4d44",
				"X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
			},
		};

		try {
			const response = await axios.request(options);
			setResult(response.data);
		} catch (error) {
			setHasError(true);
		}
	};
	return (
		<>
			<input
				type="text"
				id="search"
				name="search"
				className="col-12 "
				required
				onChange={(e) => {
					getResult(e.target.value);
				}}
			/>
			<label htmlFor="search">Search On Youtube Videos</label>
			{/* <h3 className={hasError === true ? "error d-block" : "error d-none"}>
				{error} &#128578;
			</h3> */}
		</>
	);
};

export default SearchInput;
