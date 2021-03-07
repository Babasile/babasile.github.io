import React, { useState, useEffect } from "react";
import { Data } from "../../config/Data.class";
import { Link } from "../../interfaces/Link.interface";

import Requests from "./requests.class";

import Navigation from "../navigation/Navigation";
import Educations from "../education/Education";
import Roles from "../role/Role";
import Skills from "../skill/Skill";
import Hobbies from "../hobby/Hobby";
import Footer from "../footer/Footer";
import Info from "../info/Info";
import { useQuery } from "@apollo/client";

import styles from "./single-page.module.css";

function SinglePage() {
	let init = new Data();
	let initNavLinks: Array<Link> = createNavLinks(init);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [resume, setResume] = useState<Data>(init);
	const [navLinks, setNavLinks] = useState<Array<Link>>(initNavLinks);
	const { loading, error, data } = useQuery(Requests.GET_DATA);

	useEffect(() => {
		if (loading === false && data) {
			setResume(data);
			setNavLinks(createNavLinks(data));
			setIsLoading(false);
		}
		if (error && !data) {
			setIsLoading(false);
		}
	}, [loading, error, data]);

	if (isLoading) {
		return (
			<div className={styles.loading}>
				<div className={styles.loader}></div>
			</div>
		);
	}

	return (
		<div>
			<Navigation links={navLinks} identity={resume.identity} />
			<Info identity={resume.identity} contact={resume.contact} />
			<Roles roles={resume.jobs} />
			<Educations educations={resume.educations} />
			<Skills skills={resume.skills} />
			<Hobbies hobbies={resume.hobbies} />
			<Footer links={resume.links} contact={resume.contact} />
		</div>
	);
}

function createNavLinks(resume: Data): Array<Link> {
	let navLinks: Array<Link> = [];

	if (resume.identity != null) {
		navLinks.push({
			name: resume.identity.firstname + " " + resume.identity.lastname,
			url: "#bio",
			icon: { class: "fas", name: "angle-right" },
		});
	}

	if (resume.educations.length > 0) {
		navLinks.push({
			name: "Formations",
			url: "#educations",
			icon: { class: "fas", name: "angle-right" },
		});
	}
	if (resume.jobs.length > 0) {
		navLinks.push({
			name: "Expériences",
			url: "#roles",
			icon: { class: "fas", name: "angle-right" },
		});
	}
	if (resume.skills.length > 0) {
		navLinks.push({
			name: "Compétences",
			url: "#skills",
			icon: { class: "fas", name: "angle-right" },
		});
	}
	if (resume.hobbies.length > 0) {
		navLinks.push({
			name: "Centres d'intérêt",
			url: "#hobbies",
			icon: { class: "fas", name: "angle-right" },
		});
	}

	return navLinks;
}

export default SinglePage;
