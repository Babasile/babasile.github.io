import React from "react";
import Props from "../../interfaces/Props.interface";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export class SkillDetail extends React.Component<Props> {
	render() {
		let skill = this.props.skill;
		let details = skill?.details.map((detail, i) => (
			<ListGroup.Item key={i}>{detail}</ListGroup.Item>
		));
		return (
			<Card style={{ width: "18rem" }} className="m-auto">
				<Card.Header>{skill?.name}</Card.Header>
				<ListGroup variant="flush">{details}</ListGroup>
			</Card>
		);
	}
}
