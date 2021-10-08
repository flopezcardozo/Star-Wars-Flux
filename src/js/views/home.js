import React, { useContext } from "react";
import "../../styles/home.scss";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="row">
				<Planets />
				<People />
				<Vehicles />
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		</div>
	);
};
