import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row mt-5 container mx-auto">
			<h2>People</h2>
			{store.people.map((item, index) => {
				return (
					<div className="col-lg-4 col-md-6" key={index}>
						<div className="card" style={{ width: "18rem" }}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>

								<p>Gender: {item.gender}</p>
								<p>Hair Colour: {item.hair_color}</p>

								<p>Eye Colour: {item.eye_color}</p>
							</div>
							<br />
							<div>
								<Link to={"/peopleDetails/" + index}>
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
					</div>
				);
			})}
		</div>
	);
};
