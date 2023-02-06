import { useDispatch, useSelector } from "react-redux"
import { calendarApi }  from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        
        dispatch(onChecking());

        try {
            
            const { data } = await calendarApi.post('/auth', { email, password })

            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( onLogin({ name: data.name, uid: data.uid }) )
            


        } catch (error) {

            dispatch(onLogout('Credenciales Incorrectos'))
            
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
        
    }
    
    const startRegister = async({name, email, password}) => {

        dispatch(onChecking());
        try {

            const { data } = await calendarApi.post('/auth/new', { name, email, password })     

            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( onLogin({ name: data.name, uid: data.uid }) )


        } catch (error) {
            console.log(error);
            const errors = (
                error.response.data.errors?.password.msg || 
                error.response.data.errors?.name.msg || 
                error.response.data.errors?.email.msg ||
                error.response.data?.msg || '')

            dispatch(onLogout(errors))
            
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }   

    }

    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() )

        try {

            const { data } = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) )
            
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() )
        }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout())
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user, 

        //* Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister


    }
    
}

