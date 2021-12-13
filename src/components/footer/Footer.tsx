import React from "react";
import ReactGA from "react-ga";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../interfaces/Link.interface";

import styles from "./Footer.module.css";
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

interface Props {
	links: Array<Link>;
	contact: Link;
}
function Footer(props: Props) {
	const { t } = useTranslation();
	const { links, contact } = props;
	let enActive = "";
	enActive = i18n.language.toLowerCase().startsWith( "en" ) ? styles.langActive : "";
	let frActive = "";
	frActive = i18n.language.toLowerCase().startsWith( "fr" ) ? styles.langActive : "";
	let rs = links.map((link, i) => (
		<OverlayTrigger
			key={link.name}
			placement="right"
			overlay={<Tooltip id={`tooltip-right`}>{link.name}</Tooltip>}
		>
			<ReactGA.OutboundLink
				eventLabel={"Go to social media - " + link.name}
				to={link.url}
				target="_blank"
				aria-label={link.name}
				rel="noopener noreferrer"
				className="text-secondary align-baseline mr-1 text-light"
			>
				<FontAwesomeIcon
					icon={[link.icon.class, link.icon.name]}
					className="size-2"
				/>
			</ReactGA.OutboundLink>
		</OverlayTrigger>
	));

	function changeLanguage(lng: string) {
		i18n.changeLanguage(lng);
	}

	return (
		<footer className={styles.textColor + " bg-dark py-1 border-top border-warning"}>
			<Container className="py-4 text-center">
				<Row>
					<Col md={6} className="pb-2">
						<span>{ t("contactme") }</span>
						<OverlayTrigger
							key={contact.name}
							placement="right"
							overlay={<Tooltip id={`tooltip-right`}>{contact.name}</Tooltip>}
						>
							<ReactGA.OutboundLink
								eventLabel="Contact me - footer"
								to={contact.url}
								aria-label={contact.name}
								target="_blank"
								rel="noopener noreferrer"
								className="align-baseline text-light"
							>
								<FontAwesomeIcon
									icon={[contact.icon.class, contact.icon.name]}
									className="size-2"
								/>
							</ReactGA.OutboundLink>
						</OverlayTrigger>
					</Col>
					<Col md={6} className="pb-2">
						<span>{ t("onrs" ) }</span>
						{rs}
					</Col>
				</Row>
				<Row className="pt-2">
					<Col xs={12}>
						{ t('projectOnGitHub' ) }
						<ReactGA.OutboundLink
							eventLabel="Open GitHub repository"
							to="https://github.com/Babasile/babasile.github.io"
							aria-label="GitHub repository"
							target="_blank"
							rel="noopener noreferrer"
							className="text-decoration-none align-baseline text-light"
						>
							GitHub <FontAwesomeIcon icon={["fab", "github"]} />
						</ReactGA.OutboundLink>
					</Col>
				</Row>
				<Row className="pt-2">
					<Col xs={12}>
						<button className={styles.langColor + " " + frActive + " btn btn-link text-decoration-none"} onClick={() => changeLanguage('fr')}>FR</button> | <button className={styles.langColor + " " + enActive + " btn btn-link text-decoration-none"} onClick={() => changeLanguage('en')}>EN</button>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
