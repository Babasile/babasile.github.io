import React from "react";
import Container from "react-bootstrap/Container";
import EducationDetail from "./EducationDetail";
import { Education } from "../../interfaces/Education.interface";

interface Props {
	educations: Array<Education>;
}

function Educations(props: Props) {
	const { educations } = props;
	const list = educations.map((education, i) => (
		<EducationDetail key={i} education={education} />
	));
	return (
		<div id="educations" className="bg-light">
			<Container className="py-5">
				<h2 className="text-center display-4">Formations</h2>
				<hr />
				<ul></ul>

				<div className="row mt-4">
					<div className="col-md-10 mx-auto">
						<div className="timeline">{list}</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Educations;
