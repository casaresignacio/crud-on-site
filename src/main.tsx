import ReactDOM from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";
import App from "./App.tsx";

import { store } from "./store/index.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
