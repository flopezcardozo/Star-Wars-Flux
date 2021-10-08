import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Planets = props => {
	const { store } = useContext(Context);

	return (
		<div className="row">
			<h2>Planets</h2>
			{store.planets.map((item, index) => {
				return (
					<div key={index} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>

							<p>Population: {item.population}</p>
							<p>Terrain: {item.terrain}</p>
						</div>
						<br />
						<Link to={"/planetDetails/" + index}>
							<button className="btn btn-primary">Learn More</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
// Demo.propTypes = {
// 	population: Proptypes.number,
// 	terrain: Proptypes.String
// };
