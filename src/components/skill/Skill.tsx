import React from "react";
import Props from "../../interfaces/Props.interface";
import { SkillDetail } from "./SkillDetail";
import Container from "react-bootstrap/Container";

export class Skill extends React.Component<Props> {
	render() {
		let skills = this.props.skills;
		let renderSkills;

		if (skills != null) {
			renderSkills = skills.map((skill, i) => (
				<SkillDetail key={i} skill={skill}></SkillDetail>
			));
		}
		return (
			<Container fluid id="skills">
				{renderSkills}
			</Container>
		);
	}
}
