import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<h2>Vehicles</h2>
			{store.vehicles.map((item, index) => {
				return (
					<div key={index} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>

							<p>Model: {item.model}</p>
							<p>Vehicle Class: {item.vehicle_class}</p>
						</div>
						<br />

						<div>
							<Link to={"/vehicleDetails/" + index}>
								<button className="btn btn-primary">Learn More</button>
							</Link>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => actions.addFavourite(item.name)}>
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
