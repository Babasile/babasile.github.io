import React from "react";
import Props from "../../interfaces/Props.interface";
import Container from "react-bootstrap/Container";

export class Role extends React.Component<Props> {
	render() {
		const { roles } = this.props;
		const list = roles?.map((role, i) => (
			<li key={i}>
				{role.title} - Entreprise: {role.company}
			</li>
		));
		return (
			<Container fluid>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
				<ul>{list}</ul>
			</Container>
		);
	}
}
