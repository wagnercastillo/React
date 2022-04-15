import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange, reset] = useForm({
		email: "wagner.castillo@unl.edu.ec",
		password: "123456",
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = (e) => {
		dispatch(startGoogleLogin());
	};
	return (
		<>
			<h3 className="auth__tittle">Login</h3>
			<form onSubmit={handleLogin}>
				<input
					className="auth__input"
					type="text"
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<button className="btn btn-primary btn-block" type="submit">
					Login
				</button>
				<hr />
				<div className="auth__social-networks">
					<p>Login with social networks</p>
					<div className="google-btn" onClick={handleGoogleLogin}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
				<Link to="/auth/register" className="link">
					Create new Account
				</Link>
			</form>
		</>
	);
};
