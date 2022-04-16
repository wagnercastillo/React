import { firebase } from "../firebase/firebase-config";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setLoggedIn]);

	if (checking) {
		return <div>Loading...</div>;
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path="/auth"
						component={AuthRouter}
						isAuthenticated={isLoggedIn}
					/>

					<PrivateRoute
						exact
						path="/"
						component={JournalScreen}
						isAuthenticated={isLoggedIn}
					/>
					<Redirect to="/auth/login" />
					
				</Switch>
			</div>
		</Router>
	);
};
