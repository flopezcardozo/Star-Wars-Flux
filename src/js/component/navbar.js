import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="dropstart">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos <span className="badge bg-secondary">{store.favourites.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favourites.map((favorito, index) => {
							return (
								<li key={index} className="d-flex justify-content-between">
									<a className="dropdown-item d-flex">
										{favorito}
										<i
											className="far fa-trash-alt ms-3"
											onClick={() => {
												actions.deleteFavourite(favorito);
											}}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
