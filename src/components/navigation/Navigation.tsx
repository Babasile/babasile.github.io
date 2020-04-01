import React from "react";
import Props from "../../interfaces/Props.interface";
import NavState from "../../interfaces/NavState.interface";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "./Navigation.module.css";

export class Navigation extends React.Component<Props, NavState> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isTop: true,
		};
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.onScroll(isTop);
			}
		});
	}

	onScroll(isTop: boolean) {
		this.setState({ isTop });
	}

	render() {
		const { links, identity } = this.props;

		const htmlLinks = links?.map((link, i) => (
			<Nav.Link key={i} href={link.url}>
				{link.name}
			</Nav.Link>
		));
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
				sticky="top"
				className="border-bottom border-warning"
			>
				<Navbar.Brand className="text-capitalize" href="#me">
					{navBrand}
					<small
						className={
							(this.state.isTop ? styles.subtitle : "") +
							" text-capitalize pl-2 font-italic"
						}
					>
						{role}
					</small>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto justify-content-end">{htmlLinks}</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
