import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { HobbyDetail } from "./detail/HobbyDetail";

export class Hobby extends React.Component<Props> {
	render() {
		const { hobbies } = this.props;
		let renderhobbies = hobbies.map((hobby, i) => (
			<HobbyDetail key={i} hobby={hobby}></HobbyDetail>
		));
		return (
			<div id="hobbies" className="bg-brown text-light">
				<Container className="py-5">
					<h2 className="text-center display-4">Centres d'intérêt</h2>
					<hr className="bg-light" />
					<Row>{renderhobbies}</Row>
				</Container>
			</div>
		);
	}
}
