import React from "react";
import Props from "../../interfaces/Props.interface";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Navigation extends React.Component<Props> {
	render() {
		const { links, identity } = this.props;

		const htmlLinks = links?.map((link, i) => (
			<Nav.Link key={i} href={link.url}>
				{link.name}
			</Nav.Link>
		));
		let navBrand: string = "Curriculum vitæ";
		if (identity != null) {
			navBrand = identity.firstname + " " + identity.lastname;
		}

		return (
			<Navbar bg="dark" variant="dark" expand="md" sticky="top">
				<Navbar.Brand href="#me">{navBrand}</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto justify-content-end">{htmlLinks}</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
