import "./Footer.css";
import logo1 from "../imgs/logo1.png";
import logo2 from "../imgs/logo2.png";
const Footer = () => {
	return (
		<footer className="Footer">
			<div className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 border-top h-100">
				<div className="col-md-4 col-6 d-flex align-items-center">
					<a
						href="/"
						className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 logo"
					>
						<img className="img-fluid" src={logo2} alt="" />
					</a>
					<span className="mb-3 mb-md-0 text-muted">© 2023 Paste & GO</span>
				</div>

				<ul className="nav col-md-4 col justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a
							className="text-muted"
							href="https://www.linkedin.com/in/marwan-mohamed-636b25226/"
							rel="noreferrer"
							target={"_blank"}
						>
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</li>
					<li className="ms-3">
						<a
							className="text-muted"
							href="https://github.com/MaroMohamedSalah"
							rel="noreferrer"
							target={"_blank"}
						>
							<i className="fa-brands fa-github"></i>
						</a>
					</li>
					<li className="ms-3">
						<a
							className="text-muted"
							href="https://www.facebook.com/profile.php?id=100009187233222"
							rel="noreferrer"
							target={"_blank"}
						>
							<i className="fa-brands fa-facebook-f"></i>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
