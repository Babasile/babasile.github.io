import React from "react";
import Props from "../../interfaces/Props.interface";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Identity } from "../../interfaces/Identity.interface";
import defaultPicture from "./default.jpg";
import sunglasses from "./sunglasses.png";
import style from "./Info.module.css";

export class Info extends React.Component<Props> {
	calculateAge(birthdate: Date) {
		let difference = Date.now() - birthdate.getTime();
		let age = new Date(difference);
		return Math.abs(age.getUTCFullYear() - 1970);
	}

	render() {
		const { identity } = this.props;
		let renderIdentity: Identity = {
			firstname: "",
			lastname: "",
			birthdate: new Date(),
			address: {
				number: "",
				street: "",
				city: "",
				zip: "",
				country: "",
				state: "",
				zone: "",
			},
			phoneNumber: "",
			email: "",
			additionnals: [],
			softskills: [],
			bio: "",
			picture: defaultPicture,
			role: "",
		};
		let renderSoftSkills;
		if (identity != null) {
			renderIdentity = identity;
			renderSoftSkills = renderIdentity.softskills.map((softSkill, i) => (
				<Col
					className="text-center align-self-center"
					xs={Math.abs(12 / renderIdentity.softskills.length)}
					key={i}
				>
					<span>{softSkill}</span>
				</Col>
			));
		}
		return (
			<div id="bio" className="bg-secondary">
				<Container className="pt-5 pb-5 bg-secondary text-light">
					<Row>
						<Col md={4}>
							<h3>A mon sujet</h3>
							{renderIdentity.bio}
							<hr className="my-3" />
							<h3>En quelques mots</h3>
							<Row>{renderSoftSkills}</Row>
						</Col>
						<Col className="text-center pt-2 pb-2" md={4}>
							<Image
								roundedCircle
								thumbnail
								src={renderIdentity.picture}
								alt="Ma tête"
								className="border border-warning bg-warning"
							/>
						</Col>
						<Col md={4}>
							<h3>Détails</h3>
							<p>
								<span className="font-weight-bold">Nom: </span>
								{renderIdentity.firstname} {renderIdentity.lastname}
								<br />
								<span className="font-weight-bold">Âge: </span>
								{this.calculateAge(renderIdentity.birthdate)} ans
								<br />
								<span className="font-weight-bold">Localisation: </span>
								{renderIdentity.address.zone}, {renderIdentity.address.country}
							</p>
							<hr />
							<h4>Extras</h4>
							<p>
								{renderIdentity.additionnals[0]}{" "}
								<Image src={sunglasses} className={style.smiley}></Image>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
