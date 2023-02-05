/**
 * 
 *  Rutas de Usuarios / Auth
 *  host + /api/auth
 * 
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken }= require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post('/new',[
    check('name','El nombre es un campo obligatorio').not().isEmpty(),
    check('email','El email es un campo obligatorio').isEmail(),
    check('password','El password debe de ser de 6 caracteres').isLength({ min:6 }),
    validarCampos,
], crearUsuario );


router.post('/', [  
    check('email','El email es un campo obligatorio').isEmail(),
    check('password','El password debe de ser de 6 caracteres').isLength({ min:6 }),
    validarCampos,
],loginUsuario );


router.get('/renew', validarJWT, revalidarToken);

module.exports =  [
    router
]

    