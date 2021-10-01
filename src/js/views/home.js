import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Demo } from "./demo";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<h2>Planets</h2>
			<div className="row flex-row flex-nowrap">
				<Demo />
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		</div>
	);
};
