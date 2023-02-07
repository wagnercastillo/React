import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
	const { state, increment, decrement,reset } = useCounter(20);

	return (
		<>
			<h1>CounterWithCustomHook: {state}</h1>
			<hr />

			<button onClick={()=>{ increment(3)}} className="btn btn-primary">+1</button>
			<button onClick={reset} className="btn btn-primary">Reset</button>
			<button onClick={()=>{ decrement(3)}} className="btn btn-primary">-1</button>
		</>
	);
};
