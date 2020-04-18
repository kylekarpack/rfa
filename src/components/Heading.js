import React from "react";

export class Heading extends React.Component {

	render() {
		let { title } = this.props;
		let arr = title.split(" ");
		const firstWord = arr.shift();


		return <h2 style={{fontWeight:300, marginBottom: "1em"}}>
			<span style={{fontWeight:700, borderBottom: "4px solid #4594aa"}}>{firstWord}</span>&nbsp;
			{arr.join(" ")}
		</h2>;
	}
}