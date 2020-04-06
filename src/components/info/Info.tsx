import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultPicture from "./default.jpg";
import sunglasses from "./sunglasses.png";
import style from "./Info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Info extends React.Component<Props> {
	calculateAge(birthdate: Date) {
		let difference = Date.now() - birthdate.getTime();
		let age = new Date(difference);
		return Math.abs(age.getUTCFullYear() - 1970);
	}

	render() {
		const { identity, contact } = this.props;
		let renderSoftSkills = identity.softskills.map((softSkill, i) => (
			<Col
				className="text-center align-self-center"
				xs={Math.abs(12 / identity.softskills.length)}
				key={i}
			>
				<span>{softSkill}</span>
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
							<h3>A mon sujet</h3>
							{identity.bio}
							<hr className="bg-light my-3" />
							<h3>En quelques mots</h3>
							<Row>{renderSoftSkills}</Row>
						</Col>
						<Col className="text-center pt-2 pb-2" md={4}>
							<Image
								roundedCircle
								thumbnail
								src={
									identity.picture.length > 0
										? identity.picture
										: defaultPicture
								}
								alt="Ma tête"
								className="border border-warning bg-warning"
							/>
						</Col>
						<Col md={4}>
							<h3>Détails</h3>
							<p>
								<span className="font-weight-bold">Nom: </span>
								{identity.firstname} {identity.lastname}
								<br />
								<span className="font-weight-bold">Âge: </span>
								{this.calculateAge(identity.birthdate)} ans
								<br />
								<span className="font-weight-bold">Localisation: </span>
								{identity.address.zone}, {identity.address.country}
							</p>
							<hr className="bg-light" />
							<h4>Extras</h4>
							<p>
								{identity.additionnals[0]}{" "}
								<Image src={sunglasses} className={style.smiley}></Image>
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="text-center mt-5">
							<a
								href={contact.url}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-light btn-lg"
							>
								Contacter moi sur {contact.name}{" "}
								<FontAwesomeIcon icon={contact.icon} />
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
