import React from "react";
import Props from "./Props.interface";
import Container from "react-bootstrap/Container";
import { RoleDetail } from "./detail/RoleDetail";

export class Role extends React.Component<Props> {
	render() {
		const { roles } = this.props;
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
}
