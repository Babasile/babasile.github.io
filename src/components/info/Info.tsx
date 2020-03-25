import React from "react";
import Props from "../../interfaces/Props.interface";

export class Info extends React.Component<Props> {
	render() {
		const { identity: Identity } = this.props;
		return <span>Bonjour {Identity?.firstname}</span>;
	}
}
