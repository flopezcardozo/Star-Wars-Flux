import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = props => {
	const { store } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.people.length > 0 && store.people[params.theid].name}</h1>
			<p>Name: {store.people.length > 0 && store.people[params.theid].name}</p>
			<p>Height: {store.people.length > 0 && store.people[params.theid].height}</p>
			<p>Hair-color: {store.people.length > 0 && store.people[params.theid].hair_color}</p>
			<p>Skin-color: {store.people.length > 0 && store.people[params.theid].skin_color}</p>
			<p>Eyes-color: {store.people.length > 0 && store.people[params.theid].eye_color}</p>
			<p>Birth year: {store.people.length > 0 && store.people[params.theid].birth_year}</p>
			<p>Gender: {store.people.length > 0 && store.people[params.theid].gender}</p>

			<hr className="my-4" />
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<Link to="/">
				<a className="btn btn-primary btn-lg" role="button">
					Go Back!
				</a>
			</Link>
		</div>
	);
};

PeopleDetails.propTypes = {};
