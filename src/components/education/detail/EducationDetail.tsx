import React from "react";
import Props from "./Props.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class EducationDetail extends React.Component<Props> {
	render() {
		const { education } = this.props;
		let courses;
		let renderCourses = education.courses.map((course, i) => (
			<li key={i}>{course}</li>
		));
		if (renderCourses != null && renderCourses.length > 0) {
			courses = (
				<p className="trim text-right">
					<ul>{renderCourses}</ul>
				</p>
			);
		}
		return (
			<div className="timeline-item">
				<h5 className="my-3 font-weight-bolder">{education.diploma}</h5>
				<p className="font-weight-bold">
					{education.school}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} />{" "}
						{education?.city}
					</span>
				</p>
				<p className="w-auto">
					{education.startDate.getFullYear()} -{" "}
					{education.current ? "Acutellement" : education.endDate.getFullYear()}
				</p>
				{courses}
			</div>
		);
	}
}
