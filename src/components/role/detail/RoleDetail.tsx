import React from "react";
import Props from "./Props.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RoleDetail extends React.Component<Props> {
	render() {
		const { role } = this.props;
		let missions;
		let renderMissions = role.missions.map((mission, i) => (
			<li key={i}>{mission}</li>
		));
		if (renderMissions != null && renderMissions.length > 0) {
			missions = (
				<p className="trim text-left">
					<ul>{renderMissions}</ul>
				</p>
			);
		}
		const formatter = new Intl.DateTimeFormat("fr", { month: "long" });

		return (
			<div className="timeline-item">
				<h5 className="my-3 font-weight-bolder">{role.title}</h5>
				<p className="font-weight-bold">
					{role.company}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {role.city}
					</span>
				</p>
				<p className="w-auto text-capitalize">
					{formatter.format(role.startDate) +
						" " +
						role.startDate.getFullYear()}{" "}
					-{" "}
					{role.current
						? "Acutellement"
						: formatter.format(role.endDate) + " " + role.endDate.getFullYear()}
				</p>
				{missions}
			</div>
		);
	}
}
