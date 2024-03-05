import React from "react";

import Project from "./homeProject";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
    const firstSixProjects = INFO.projects.slice(0,6)
	return (
		<div className="all-projects-container">
			{firstSixProjects.map((project, index) => (
				<div className={`all-projects-project ${index === 5 ? 'last-project' : ''}`} key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
