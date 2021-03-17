import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";
import { Identity } from "./../../interfaces/Identity.interface";
import { Link } from "./../../interfaces/Link.interface";

import styles from "./Navigation.module.css";

interface Props {
	identity: Identity;
	links: Array<Link>;
}
function Navigation(props: Props) {
	const { links, identity } = props;

	const htmlLinks = links.map((link, i) => (
		<Nav.Link
			className={link.url === "#bio" ? "d-none" : styles.textColor}
			key={i}
			href={link.url}
		>
			{link.name}
		</Nav.Link>
	));
	let spyLinks: string[] = [];
	if (links != null) {
		spyLinks = links.map((link) => link.url.replace("#", ""));
	}
	let navBrand: string = "Curriculum vitæ";
	let role = "";
	if (identity != null) {
		navBrand = identity.firstname + " " + identity.lastname;
		role = identity.role;
	}

	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="md"
			fixed="top"
			className="border-bottom border-warning"
		>
			<Navbar.Brand className="text-capitalize mr-0" href="#bio" id="me">
				{navBrand}
				<small
					className={styles.subtitle + " text-capitalize pl-2 font-italic"}
				>
					{role}
				</small>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Scrollspy
					items={spyLinks}
					currentClassName="active"
					className="ml-auto justify-content-end navbar-nav"
					componentTag="div"
				>
					{htmlLinks}
				</Scrollspy>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
