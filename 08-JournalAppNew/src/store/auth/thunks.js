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
        const {ok,uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok){
            return dispath(logout({errorMessage}));
        }

        dispath(login({uid, displayName, email, photoURL}));
    }

}


