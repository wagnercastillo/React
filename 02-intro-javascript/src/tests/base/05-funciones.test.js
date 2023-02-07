import '@testing-library/jest-dom'
import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe("Prueba en 05-funciones", () => {

    test("getUser debe de retorna un objeto", () => {

        const UserTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();
        
        expect(user).toEqual(UserTest);
        

    });

    test("getUsuarioActivo debe de retorna un objeto", () => {

        const nombre = 'Wagner';
        const UserActivoTest = {
            uid: 'ABC567',
            username: nombre
        }
        
        const user = getUsuarioActivo('Wagner');
        
        expect(user).toEqual(UserActivoTest);
        

    });
});
