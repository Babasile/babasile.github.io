import React from "react";
import ReactGA from "react-ga";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultPicture from "./default.jpg";
import automobile from "./automobile.png";
import style from "./Info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Identity } from "../../interfaces/Identity.interface";
import { Link } from "../../interfaces/Link.interface";
import {useTranslation} from 'react-i18next';

interface Props {
	identity: Identity;
	contact: Link;
}

function Info(props: Props) {
	const { t } = useTranslation();
	const { identity, contact } = props;
	let renderSoftSkills = identity.softskills.map((value, i) => (
		<Col
			className="text-center align-self-center"
			xs={Math.abs(12 / identity.softskills.length)}
			key={i}
		>
			<span>{value.name}</span>
		</Col>
	));
	return (
		<div id="bio" className="bg-brown text-light">
			<Container className="py-5">
				<Row>
					<Col>
						<h1 className="text-center display-1">
							{identity.firstname} {identity.lastname}
						</h1>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<h2 className="m-auto display-4">{identity.role}</h2>
					</Col>
				</Row>
				<hr className="bg-light" />
				<Row>
					<Col md={4}>
						<h3>{ t("aboutme") }</h3>
						{identity.bio}
						<hr className="bg-light my-3" />
						<h3>{ t("fewWords") }</h3>
						<Row>{renderSoftSkills}</Row>
					</Col>
					<Col className="text-center pt-2 pb-2" md={4}>
						<Image
							roundedCircle
							thumbnail
							src={
								identity.picture.url.length > 0
									? identity.picture.url
									: defaultPicture
							}
							alt={ t("head") }
							width={182}
							height={188}
							className="border border-warning bg-warning"
						/>
					</Col>
					<Col md={4}>
						<h3>{ t("details") }</h3>
						<p>
							<span className="font-weight-bold">{ t("name") }</span>
							{identity.firstname} {identity.lastname}
							<br />
							<span className="font-weight-bold">{ t("age") }</span>
							{calculateAge(identity.birthdate)} { t("years") }
							<br />
							<span className="font-weight-bold">{ t("localization") }</span>
							{identity.address.zone}, {identity.address.country}
						</p>
						<hr className="bg-light" />
						<h4>{ t("extras") }</h4>
						<p>
							{identity.additionnals[0].name}{" "}
							<Image
								src={automobile}
								className={style.smiley}
								width={58}
								height={32}
								alt="smiley"
							></Image>
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center mt-5">
						<ReactGA.OutboundLink
							eventLabel="Contact me - Info"
							to={contact.url}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-light btn-lg"
						>
							{ t("contactme") }{contact.name}{" "}
							<FontAwesomeIcon icon={[contact.icon.class, contact.icon.name]} />
						</ReactGA.OutboundLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

function calculateAge(birthdate: Date) {
	let difference = Date.now() - new Date(birthdate).getTime();
	let age = new Date(difference);
	return Math.abs(age.getUTCFullYear() - 1970);
}

export default Info;
