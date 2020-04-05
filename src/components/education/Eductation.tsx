import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";
import { EducationDetail } from "./detail/EducationDetail";

export class Education extends React.Component<Props> {
	render() {
		const { educations } = this.props;
		const list = educations.map((education, i) => (
			<EducationDetail key={i} education={education} />
		));
		return (
			<div id="educations" className="bg-light">
				<Container className="py-5">
					<h2 className="text-center display-3">Formations</h2>
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
}
