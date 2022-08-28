import { useDispatch,useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from './store/slices/counter'

import logo from "./logo.svg";
import "./App.css";


function App() {

	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					count is: {counter}	
				</p>
				<p>
					<button type="button" onClick={() => {dispatch(increment())}}>
						 Increment
					</button>
					<button type="button" onClick={() => {dispatch(decrement())}}>
						 Decrement
					</button>
					<button 
						type="button" 
						onClick={() => {dispatch(incrementByAmount(2))}}>
						 Increment by 2
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;

