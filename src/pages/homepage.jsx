import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Experience from "../components/homepage/experience";
import Works from "../components/homepage/works";
import SixProjects from "../components/projects/homePageProjects";
import Email from "../components/homepage/emailComponent";


import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import { TypewriterClass } from "typewriter-effect";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [isVisible, setIsVisible] = useState(false);



	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	useEffect(() => {
		const handleScroll = () => {
		  const experienceElement = document.querySelector(".experience");
		  if (experienceElement) {
			const topPosition = experienceElement.getBoundingClientRect().top;
			const bottomPosition = experienceElement.getBoundingClientRect().bottom;
			const windowHeight = window.innerHeight;
	
			if (topPosition < windowHeight && bottomPosition > 0) {
			  setIsVisible(true);
			}
		  }
		};
	
		window.addEventListener("scroll", handleScroll);
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const homepageTitle = INFO.homepage.title;

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									
									<Typewriter
										options={{
											delay: 50,
									  	}}
										onInit={(typewriter) => {
										typewriter.typeString(homepageTitle)
										.start()
									  }}></Typewriter>
									
									
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className="homepage-socials">
							
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<h1>Projects</h1>
							<SixProjects />
							<div className="homepage-projects-see-more">
								<a href="/projects">See More...</a>
							</div>
						</div>
						<div className="experience">
							{isVisible && (
								<div className="fade-in">
									<Experience></Experience>
								</div>
								)}
						</div>
						
						<div className="homepage-after-title">
							<div className="homepage-articles">
								<Email></Email>
							</div>

							<div className="homepage-works">
								<Works />
							
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
