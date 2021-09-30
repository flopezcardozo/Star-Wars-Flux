const baseUrl = "https://swapi.dev/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: []
		},
		actions: {
			getPlanets: async () => {
				let varUrl = baseUrl + "planets/";
				try {
					let response = await (await fetch(varUrl)).json();
					//let responseBody = await response.json();
					setStore({ planets: response.results });
				} catch (error) {
					console.log("Error!");
				}
			},
			getPeople: async () => {
				let varUrl = baseUrl + "people/";
				try {
					let response = await (await fetch(varUrl)).json();
					//let responseBody = await response.json();
					setStore({ people: response.results });
				} catch (error) {
					console.log("Error!");
				}
			},
			getVehicles: async () => {
				let varUrl = baseUrl + "vehicles/";
				try {
					let response = await (await fetch(varUrl)).json();
					//let responseBody = await response.json();
					setStore({ vehicles: response.results });
				} catch (error) {
					console.log("Error!");
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
