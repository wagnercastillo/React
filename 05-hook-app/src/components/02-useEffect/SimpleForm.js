import React, { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
	const [formState, setformState] = useState({
		name: "",
		email: "",
	});

	const { name, email } = formState;
	
	const handleInputChange = ({ target }) => {
		setformState(
			{
				...formState,
				[target.name]: target.value,
			},
			[]
		);
	};

	useEffect(() => {
		console.log("Hey");
	}, []);

	useEffect(() => {
		console.log("email cambio");
	}, [email]);

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="Tu email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				{name === "123" && <Message />}
			</div>
		</>
	);
};
