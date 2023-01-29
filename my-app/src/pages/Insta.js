import "./insta.css";
import { Link } from "react-router-dom";
import stillWorking from "../imgs/still working on it.gif";
const Insta = () => {
	return (
		<div className="Insta row">
			<h1 className="text-center">I'm Still Working On It</h1>
			<img className="img-fluid w-25" src={stillWorking} alt="" srcSet="" />
			{/* <div
				id="carouselExampleAutoplaying"
				className="carousel slide col h-50 d-flex justify-content-center align-items-center"
				data-bs-ride="carousel"
				data-bs-touch="false"
			>
				<div className="carousel-inner text-center">
					<div className="carousel-item active">
						<Link className="op d-block">one</Link>
					</div>
					<div className="carousel-item">
						<Link className="op d-block">tow</Link>
					</div>
					<div className="carousel-item">
						<Link className="op d-block">tree</Link>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div> */}
		</div>
	);
};
export default Insta;
