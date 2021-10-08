import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const People = props => {
	const { store } = useContext(Context);

	return (
		<div className="row">
			<h2>People</h2>
			{store.people.map((item, index) => {
				return (
					<div key={index} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>

							<p>Gender: {item.gender}</p>
							<p>Hair Colour: {item.hair_color}</p>

							<p>Eye Colour: {item.eye_color}</p>
						</div>
						<br />
						<Link to={"/peopleDetails/" + index}>
							<button className="btn btn-primary">Learn More</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
