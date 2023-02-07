import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 3 }) => {
	const [counter, setCounter] = useState(value);

	const handleAdd = (e) => {
		setCounter(counter + 1);
	};

	const handleAdd2 = (e) => {
		setCounter(() => {
			return CounterApp.defaultProps.value;
		});
	};

	const handleAdd3 = (e) => {
		setCounter(counter - 1);
	};

	return (
		<>
			<h1> CounterApp </h1>
			<h2> {counter} </h2>
			<button onClick={handleAdd}> +1 </button>
			<button onClick={handleAdd2}> Reset </button>
			<button onClick={handleAdd3}> -1 </button>
		</>
	);
};

CounterApp.defaultProps = {
	value: 0,
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

export default CounterApp;
