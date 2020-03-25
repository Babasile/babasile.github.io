import React from "react";
import Props from "../../interfaces/Props.interface";

export class Role extends React.Component<Props> {
	render() {
		const { roles } = this.props;
		const list = roles?.map((role, i) => <li key={i}>{role.title}</li>);
		return <ul>{list}</ul>;
	}
}
