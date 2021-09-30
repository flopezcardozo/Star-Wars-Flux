import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			key={index}
			{store.planets.map((item, index) => {
				return (
					
					<div className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">

							<Link to={"/single/" + index}>
								<span>Link to: {item.name}</span>
							</Link>

						</div>
						<br />
						<Link to="/">
							<button className="btn btn-primary">Back home</button>
						</Link>
					</div>
				
				),}};
		

		</div>
	);

};
