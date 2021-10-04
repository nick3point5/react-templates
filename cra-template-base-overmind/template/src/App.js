import "./App.css";
import { useAppState, useActions } from "./overmind";

function App() {
	const { state } = useAppState();
	const { setOverState } = useActions();

	return (
		<div className="App">
			<h1>state: {state}</h1>
			<button onClick={() => setOverState(state+1)}>+</button>
		</div>
	);
}

export default App;
