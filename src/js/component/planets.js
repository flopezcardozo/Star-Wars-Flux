import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Planets = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row mt-5">
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
						<div>
							<Link to={"/planetDetails/" + index}>
								<button className="btn btn-primary">Learn More</button>
							</Link>
							<button
								type="button"
								className={
									store.favourites.includes(item.name) ? "btn btn-warning" : "btn btn-secondary"
								}
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
// Demo.propTypes = {
// 	population: Proptypes.number,
// 	terrain: Proptypes.String
// };
