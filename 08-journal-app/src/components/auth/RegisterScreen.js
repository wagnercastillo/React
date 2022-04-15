import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";


export const RegisterScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange, reset] = useForm({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(name, email, password, password2);
		reset();

		if (isFormValid()) {
			console.log("Formulario valido");
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError("name is required"));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError("email is invalid"));
			return false;
		} else if (password !== password2 || password.length <= 5) {
			dispatch(
				setError(
					"password should be at least 6 characters or match the confirm password"
				)
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};	

	return (
		<>
			<h3 className="auth__tittle">Register</h3>
			<form onSubmit={handleRegister}>
				<div className="auth__alert-error ">Hola mundo</div>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={name}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={email}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={password}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					name="password2"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={password2}
				/>
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Register
				</button>
				<hr />

				<Link to="/auth/login" className="link">
					Alredy Registered?
				</Link>
			</form>
		</>
	);
};
