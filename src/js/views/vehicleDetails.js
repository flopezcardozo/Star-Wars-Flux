import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = props => {
	const { store } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron mt-5">
			<h1 className="display-4">{store.vehicles.length > 0 && store.vehicles[params.theid].name}</h1>
			<p>Name: {store.vehicles.length > 0 && store.vehicles[params.theid].name}</p>
			<p>Model: {store.vehicles.length > 0 && store.vehicles[params.theid].model}</p>
			<p>Passengers: {store.vehicles.length > 0 && store.vehicles[params.theid].passengers}</p>
			<p>Vehicle Class: {store.vehicles.length > 0 && store.vehicles[params.theid].vehicle_class}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

VehicleDetails.propTypes = {};
