import React from "react";

export class Heading extends React.Component {

	render() {
		let { title, className } = this.props;
		className = className || "is-size-3";
		if (!title) { 
			return null;
		}
		let arr = title.split(" ");
		const firstWord = arr.shift();

		return <span className={`custom-heading ${className}`}>
			<span className="first-word">{firstWord}</span>&nbsp;
			{arr.join(" ")}
		</span>;
	}
}