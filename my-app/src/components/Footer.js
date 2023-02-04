import "./Footer.css";
const Footer = () => {
	return (
		<div className="Footer">
			<ul className="social">
				<li>
					<a
						href="https://www.linkedin.com/in/marwan-mohamed-636b25226/"
						target={"_blank"}
						rel="noreferrer"
					>
						<i class="fa-brands fa-linkedin-in"></i>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/MaroMohamedSalah"
						target={"_blank"}
						rel="noreferrer"
					>
						<i class="fa-brands fa-github"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/maro_salah1/"
						target={"_blank"}
						rel="noreferrer"
					>
						<i class="fa-brands fa-instagram"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/profile.php?id=100009187233222"
						target={"_blank"}
						rel="noreferrer"
					>
						<i class="fa-brands fa-facebook-f"></i>
					</a>
				</li>
			</ul>
			<h2 className="text-center">
				ENG.Marwan Mohamed @<span>2023</span>
			</h2>
		</div>
	);
};
export default Footer;
