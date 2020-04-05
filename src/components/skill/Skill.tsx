import React from "react";
import Props from "./Props.interface";
import { SkillDetail } from "./detail/SkillDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export class Skill extends React.Component<Props> {
	render() {
		let skills = this.props.skills;

		let renderSkills = skills.map((skill, i) => (
			<SkillDetail key={i} skill={skill}></SkillDetail>
		));
		return (
			<div id="skills" className="bg-secondary text-light">
				<Container className="py-5">
					<h2 className="text-center display-3">Compétences</h2>
					<hr className="bg-light" />
					<Row>{renderSkills}</Row>
				</Container>
			</div>
		);
	}
}
