import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron mt-5">
			<h1 className="display-4">{store.planets.length > 0 && store.planets[params.theid].name}</h1>
			<p>Name: {store.planets.length > 0 && store.planets[params.theid].name}</p>
			<p>Climate: {store.planets.length > 0 && store.planets[params.theid].climate}</p>
			<p>Terrain: {store.planets.length > 0 && store.planets[params.theid].terrain}</p>
			<p>Population: {store.planets.length > 0 && store.planets[params.theid].population}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

PlanetDetails.propTypes = {};
