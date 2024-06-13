import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<>
			<CreateNewUser />
			<ListOfUsers />
		</>
	);
}

export default App;
