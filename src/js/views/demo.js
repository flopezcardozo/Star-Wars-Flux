import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Proptypes from "prop-types";
import "../../styles/demo.scss";

export const Demo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="row flex-row flex-nowrap">
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
							<Link to={"/single/" + index}>
								<button className="btn btn-primary">Learn More</button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};
// Demo.propTypes = {
// 	population: Proptypes.number,
// 	terrain: Proptypes.String
// };
