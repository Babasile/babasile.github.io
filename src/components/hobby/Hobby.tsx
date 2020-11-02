import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HobbyDetail from "./HobbyDetail";
import { Hobby } from "./../../interfaces/Hobby.interface";

interface Props {
	hobbies: Array<Hobby>;
}

function Hobbies(props: Props) {
	const { hobbies } = props;
	let renderhobbies = hobbies.map((hobby, i) => (
		<HobbyDetail key={i} hobby={hobby}></HobbyDetail>
	));
	return (
		<div id="hobbies" className="bg-brown text-light">
			<Container className="py-5">
				<h2 className="text-center mt-5 mt-md-0 display-4">Centres d'intérêt</h2>
				<hr className="bg-light" />
				<Row>{renderhobbies}</Row>
			</Container>
		</div>
	);
}

export default Hobbies;
