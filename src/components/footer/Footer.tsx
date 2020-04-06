import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends React.Component<Props> {
	render() {
		const { links } = this.props;
		let contact;
		let rs = links.map((link, i) =>
			link.name === "Linkedin" ? (
				""
			) : (
				<OverlayTrigger
					key="right"
					placement="right"
					overlay={<Tooltip id={`tooltip-right`}>{link.name}</Tooltip>}
				>
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-secondary align-baseline mr-1"
						style={{ fontSize: "2rem" }}
					>
						<FontAwesomeIcon
							icon={
								link.name === "GitHub"
									? ["fab", "github"]
									: link.name === "Twitter"
									? ["fab", "twitter"]
									: ["fab", "instagram"]
							}
						/>
					</a>
				</OverlayTrigger>
			),
		);
		for (let index = 0; index < links.length; index++) {
			let element = links[index];
			if (element.name === "Linkedin") {
				contact = (
					<OverlayTrigger
						key="right"
						placement="right"
						overlay={<Tooltip id={`tooltip-right`}>{element.name}</Tooltip>}
					>
						<a
							href={element.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary align-baseline"
							style={{ fontSize: "2rem" }}
						>
							<FontAwesomeIcon icon={["fab", "linkedin"]} />
						</a>
					</OverlayTrigger>
				);
			}
		}
		return (
			<footer className="bg-dark text-secondary py-1">
				<Container>
					<Row>
						<Col md={6}>
							<span className="font-weight-bold ">Contacter moi sur </span>
							{contact}
						</Col>
						<Col md={6}>
							<span className="font-weight-bold">Egalement présent sur </span>
							{rs}
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
