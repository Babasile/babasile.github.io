import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Data } from "./config/Data.class";

import { Navigation } from "./components/navigation/Navigation";
import { Education } from "./components/education/Eductation";
import { Role } from "./components/role/Role";
import { Skill } from "./components/skill/Skill";
import { Hobby } from "./components/hobby/Hobby";
import { Footer } from "./components/footer/Footer";
import { Info } from "./components/info/Info";
import { Link } from "./interfaces/Link.interface";

function App() {
	let resume = new Data();
	let navLinks: Array<Link> = initNavLinks(resume);
	library.add(fab, fas);
	return (
		<div>
			<Navigation links={navLinks} identity={resume.identity} />
			<Info identity={resume.identity} />
			<Education educations={resume.educations} />
			<Role roles={resume.roles} />
			<Skill skills={resume.skills} />
			<Hobby hobbies={resume.hobbies} />
			<Footer links={resume.links} />
		</div>
	);
}

function initNavLinks(resume: Data): Array<Link> {
	let navLinks: Array<Link> = [];

	if (resume.identity != null) {
		navLinks.push({
			name: resume.identity.firstname + " " + resume.identity.lastname,
			url: "#bio",
		});
	}

	if (resume.educations.length > 0) {
		navLinks.push({
			name: "Formations",
			url: "#educations",
		});
	}
	if (resume.roles.length > 0) {
		navLinks.push({
			name: "Expériences",
			url: "#roles",
		});
	}
	if (resume.skills.length > 0) {
		navLinks.push({
			name: "Compétences",
			url: "#skills",
		});
	}
	if (resume.hobbies.length > 0) {
		navLinks.push({
			name: "Centres d'intérêt",
			url: "#hobbies",
		});
	}

	return navLinks;
}

export default App;
