import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Role } from "../../interfaces/Role.interface";

interface Props {
	role: Role;
}

function RoleDetail(props: Props) {
	const { role } = props;
	let missions;
	let renderMissions = role.missions.map((mission, i) => (
		<li key={i}>{mission}</li>
	));
	if (renderMissions != null && renderMissions.length > 0) {
		missions = (
			<div className="trim text-left">
				<ul>{renderMissions}</ul>
			</div>
		);
	}
	const formatter = new Intl.DateTimeFormat("fr", { month: "long" });

	return (
		<div className="timeline-item">
			<h5 className="w-auto text-capitalize">
				{formatter.format(role.startDate) + " " + role.startDate.getFullYear()}{" "}
				-{" "}
				{role.current
					? "Actuellement"
					: formatter.format(role.endDate) + " " + role.endDate.getFullYear()}
			</h5>
			<div>
				<h5 className="my-3 font-weight-bolder">{role.title}</h5>
				<p className="font-weight-bold">
					{role.company}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {role.city}
					</span>
				</p>
				{missions}
			</div>
		</div>
	);
}

export default RoleDetail;
