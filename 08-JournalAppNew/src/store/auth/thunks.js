import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const chekingAuthentication = (email, password) => {
    return async (dispatch) => {
        console.log(email, password)
        dispatch(checkingCredentials());
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) {
            return dispatch(logout(result.errorMessage))
        }

        dispatch(login( result))
        console.log({ result });
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    return async(dispath) => {
        dispath(checkingCredentials());
        const resp = await registerUserWithEmailPassword({email, password, displayName});
        console.log(resp);
    }

}