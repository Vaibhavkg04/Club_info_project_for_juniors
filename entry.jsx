import React from "react";
function Card(props) {
	return (
		<div className="term">
			<dt>
				<img src={props.img} alt="" />
				<dt className="clubName">{props.name}</dt>
			</dt>

			<dd className="clubDescription">{props.description}</dd>
			<dd className="clubLink">{props.link}</dd>
		</div>
	);
}

export default Card;
