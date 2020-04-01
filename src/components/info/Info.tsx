import React from "react";
import Props from "../../interfaces/Props.interface";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Identity } from "../../interfaces/Identity.interface";
import defaultPicture from "./default.jpg";

export class Info extends React.Component<Props> {
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
		if (identity != null) {
			renderIdentity = identity;
		}
		return (
			<Container id="me" fluid className="pt-5 pb-5 bg-secondary text-light">
				<Row>
					<Col className="text-center" md={6}>
						<Image
							roundedCircle
							thumbnail
							src={renderIdentity.picture}
							alt="Ma tête"
							className="border border-warning bg-warning"
						/>
					</Col>
					<Col md={6}>{renderIdentity.bio}</Col>
				</Row>
			</Container>
		);
	}
}
