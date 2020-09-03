import React from "react";
import ReactGA from "react-ga";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import SinglePage from "./components/single-page/single-page";

import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

function App() {
	if (process.env.NODE_ENV === "production") {
		initializeReactGA();
	}
	const client = new ApolloClient({
		cache: new InMemoryCache({ addTypename: false }),
		link: new HttpLink({
			uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
		}),
	});
	library.add(fab, fas);
	return (
		<ApolloProvider client={client}>
			<SinglePage />
		</ApolloProvider>
	);
}

function initializeReactGA() {
	let GA = "";
	if (process.env.REACT_APP_UA_GOOGLE_PROPERTY !== undefined) {
		GA = process.env.REACT_APP_UA_GOOGLE_PROPERTY;
	}
	ReactGA.initialize(GA);
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview("/home");
}

export default App;
