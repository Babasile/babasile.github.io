import React from "react";
import Container from "react-bootstrap/Container";
import RoleDetail from "./RoleDetail";
import { Role } from "../../interfaces/Role.interface";

interface Props {
	roles: Array<Role>;
}
function Roles(props: Props) {
	const { roles } = props;
	const list = roles.map((role, i) => <RoleDetail key={i} role={role} />);
	return (
		<div id="roles" className="bg-light">
			<Container className="py-5">
				<h2 className="text-center display-4">Expériences</h2>
				<hr />
				<div className="row mt-4">
					<div className="col-md-10 mx-auto">
						<div className="timeline">{list}</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Roles;
