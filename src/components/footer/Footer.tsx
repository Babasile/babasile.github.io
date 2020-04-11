import React from "react";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../interfaces/Link.interface";

interface Props {
	links: Array<Link>;
	contact: Link;
}
function Footer(props: Props) {
	const { links, contact } = props;
	let rs = links.map((link, i) => (
		<OverlayTrigger
			key={link.name}
			placement="right"
			overlay={<Tooltip id={`tooltip-right`}>{link.name}</Tooltip>}
		>
			<a
				href={link.url}
				target="_blank"
				aria-label={link.name}
				rel="noopener noreferrer"
				className="text-secondary align-baseline mr-1 text-light"
			>
				<FontAwesomeIcon icon={link.icon} className="size-2" />
			</a>
		</OverlayTrigger>
	));
	return (
		<footer className="bg-dark text-secondary py-1 border-top border-warning">
			<Container className="py-4 text-center">
				<Row>
					<Col md={6} className="pb-3">
						<span className="font-weight-bold ">Contacter moi sur </span>
						<OverlayTrigger
							key={contact.name}
							placement="right"
							overlay={<Tooltip id={`tooltip-right`}>{contact.name}</Tooltip>}
						>
							<a
								href={contact.url}
								aria-label={contact.name}
								target="_blank"
								rel="noopener noreferrer"
								className="text-secondary align-baseline text-light"
							>
								<FontAwesomeIcon icon={contact.icon} className="size-2" />
							</a>
						</OverlayTrigger>
					</Col>
					<Col md={6} className="pb-3">
						<span className="font-weight-bold">Egalement présent sur </span>
						{rs}
					</Col>
				</Row>
				<Row className="pt-3">
					<Col xs={12}>
						Retrouver ce projet sur{" "}
						<a
							href="https://github.com/Babasile/babasile.github.io"
							aria-label="GitHub repository"
							target="_blank"
							rel="noopener noreferrer"
							className="text-decoration-none align-baseline text-light"
						>
							GitHub <FontAwesomeIcon icon={["fab", "github"]} />
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
