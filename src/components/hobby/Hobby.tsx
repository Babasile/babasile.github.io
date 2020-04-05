import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";

export class Hobby extends React.Component<Props> {
	render() {
		const hobbies = this.props;
		return (
			<div id="hobbies" className="bg-secondary text-light">
				<Container className="py-5">
					<h2 className="text-center display-3">Centres d'intérêt</h2>
					<hr className="bg-light" />
				</Container>
			</div>
		);
	}
}
