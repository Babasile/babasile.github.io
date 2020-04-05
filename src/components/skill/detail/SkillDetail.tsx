import React from "react";
import Props from "./Props.interface";
import Col from "react-bootstrap/Col";

export class SkillDetail extends React.Component<Props> {
	render() {
		const skill = this.props.skill;
		let details = skill.details.map((detail, i) => (
			<li key={i}>
				<span>{detail}</span>
			</li>
		));
		return (
			<Col md={4} xs={12}>
				<div className="tree">
					<ul>
						<li className="parent_li">
							<h5>{skill.name}</h5>
							<ul>{details}</ul>
						</li>
					</ul>
				</div>
			</Col>
		);
	}
}
