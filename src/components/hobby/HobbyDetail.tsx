import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hobby } from "../../interfaces/Hobby.interface";

interface Props {
	hobby: Hobby;
}

function HobbyDetail(props: Props) {
	const { hobby } = props;
	return (
		<Col md={4} xs={12} className="text-center">
			<div className="border border-grey rounded mb-3 p-3">
				<FontAwesomeIcon icon={hobby.icon} className="display-1" />
				<h5 className="my-2">{hobby.name}</h5>
				<p className="m-0">{hobby.comment}</p>
			</div>
		</Col>
	);
}

export default HobbyDetail;
