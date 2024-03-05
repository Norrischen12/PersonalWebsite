import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		// Add fade-in class to title after 1 second
		document.querySelector('.about-title').classList.add('fade');
		
		// Add fade-in class to description and image after 2 seconds
		setTimeout(() => {
		  document.querySelector('.about-subtitle').classList.add('fade');
		  document.querySelector('.about-subtitle2').classList.add('fade');
		  document.querySelector('.about-image-container').classList.add('fade');
		}, 500);
	  }, []);


	const currentSEO = SEO.find((item) => item.page === "about");
	const title = INFO.about.title;
	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{title}
								</div>

								<p className="subtitle about-subtitle">
									{INFO.about.description}
								</p>
								<p className="subtitle about-subtitle2">
									{INFO.about.description2}
								</p>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="Teaching.jpg"
											alt="Teaching Picture"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
