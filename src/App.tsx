import React from "react";
import ReactGA from "react-ga";
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
	initializeReactGA();
	let resume = new Data();
	let navLinks: Array<Link> = initNavLinks(resume);
	library.add(fab, fas);
	return (
		<div>
			<Navigation links={navLinks} identity={resume.identity} />
			<Info identity={resume.identity} contact={resume.contact} />
			<Education educations={resume.educations} />
			<Role roles={resume.roles} />
			<Skill skills={resume.skills} />
			<Hobby hobbies={resume.hobbies} />
			<Footer links={resume.links} contact={resume.contact} />
		</div>
	);
}

function initNavLinks(resume: Data): Array<Link> {
	let navLinks: Array<Link> = [];

	if (resume.identity != null) {
		navLinks.push({
			name: resume.identity.firstname + " " + resume.identity.lastname,
			url: "#bio",
			icon: ["fas", "angle-right"],
		});
	}

	if (resume.educations.length > 0) {
		navLinks.push({
			name: "Formations",
			url: "#educations",
			icon: ["fas", "angle-right"],
		});
	}
	if (resume.roles.length > 0) {
		navLinks.push({
			name: "Expériences",
			url: "#roles",
			icon: ["fas", "angle-right"],
		});
	}
	if (resume.skills.length > 0) {
		navLinks.push({
			name: "Compétences",
			url: "#skills",
			icon: ["fas", "angle-right"],
		});
	}
	if (resume.hobbies.length > 0) {
		navLinks.push({
			name: "Centres d'intérêt",
			url: "#hobbies",
			icon: ["fas", "angle-right"],
		});
	}

	return navLinks;
}

function initializeReactGA() {
	ReactGA.initialize("");
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview("/home");
}

export default App;
