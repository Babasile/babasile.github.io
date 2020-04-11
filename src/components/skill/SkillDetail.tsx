import React from "react";
import Col from "react-bootstrap/Col";
import { Skill } from "../../interfaces/Skill.interface";

interface Props {
	skill: Skill;
}

function SkillDetail(props: Props) {
	const skill = props.skill;
	let details = skill.details.map((detail, i) => (
		<li key={i}>
			<span>{detail}</span>
		</li>
	));
	return (
		<Col md={4} xs={12}>
			<div className="tree mb-3 p-3 border border-grey rounded">
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

export default SkillDetail;
