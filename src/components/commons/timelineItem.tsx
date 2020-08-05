import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
	title: string;
	name: string;
	city: string;
	startDate: Date;
	endDate: Date;
	current: boolean;
	formatDate: boolean;
	details: Array<string>;
	keywords: Array<string>;
}

function TimelineItem(props: Props) {
	let details;
	let renderDetails = props.details.map((detail, i) => (
		<li key={i}>{detail}</li>
	));
	if (renderDetails != null && renderDetails.length > 0) {
		details = (
			<p className="details trim">
				<ul>{renderDetails}</ul>
			</p>
		);
	}
	let keywords;
	let renderKeywords = props.keywords.map((keyword, i) => (
		<li>
			<span className="tag">{keyword}</span>
		</li>
	));
	if (renderKeywords != null && renderKeywords.length > 0) {
		keywords = (
			<p className="keywords trim">
				<ul className="tags">{renderKeywords}</ul>
			</p>
		);
	}

	function renderDate() {
		const formatter = new Intl.DateTimeFormat("fr", { month: "long" });
		if (props.formatDate) {
			return (
				<>
					{props.formatDate ? formatter.format(props.startDate) + " " : ""}
					{props.startDate.getFullYear()} -{" "}
					{props.current
						? "Actuellement"
						: formatter.format(props.endDate) +
						  " " +
						  props.endDate.getFullYear()}
				</>
			);
		} else {
			return (
				<>
					{props.startDate.getFullYear()} -{" "}
					{props.current ? "Actuellement" : props.endDate.getFullYear()}
				</>
			);
		}
	}

	return (
		<div className="timeline-item">
			<h5 className="w-auto text-capitalize">{renderDate()}</h5>
			<div>
				<h5 className="my-3 font-weight-bolder">{props.title}</h5>
				<p className="font-weight-bold">
					{props.name}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {props?.city}
					</span>
				</p>
				{details}
				{keywords}
			</div>
		</div>
	);
}

export default TimelineItem;
