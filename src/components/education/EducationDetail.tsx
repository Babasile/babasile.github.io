import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Education } from "../../interfaces/Education.interface";

interface Props {
	education: Education;
}

function EducationDetail(props: Props) {
	const { education } = props;
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
			<h5 className="w-auto">
				{education.startDate.getFullYear()} -{" "}
				{education.current ? "Actuellement" : education.endDate.getFullYear()}
			</h5>
			<div>
				<h5 className="my-3 font-weight-bolder">{education.diploma}</h5>
				<p className="font-weight-bold">
					{education.school}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} />{" "}
						{education?.city}
					</span>
				</p>
				{courses}
			</div>
		</div>
	);
}

export default EducationDetail;
