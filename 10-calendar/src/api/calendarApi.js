import axios from 'axios';

const calendarApi = axios.create({
    baseURL: process.env.REACT_APP_URL
});


// Todo: configurar interceptores

calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    
    return config;

});


export default calendarApi;


