import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ListOfUsers from "./components/ListOfUsers.tsx";

import { Provider } from "react-redux";
import { store } from "./store/index.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ListOfUsers />
	</Provider>,
);
