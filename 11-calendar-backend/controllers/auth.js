const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async (req, res = response )=> {
    
    const { email, password } = req.body;

    try {
        
        let usuario = await Usuario.findOne({ email })

        if( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }
    
        usuario = new Usuario(req.body);

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );


        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );


        await usuario.save();
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error);    
        res.status(500).json({
            ok: false,
            msg: 'hable con el ing'
        });
    }
    
}


const loginUsuario = async (req, res = response)=> {

    const { email, password } = req.body;
    
    try {
        
        const usuario = await Usuario.findOne({ email })

        if( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario y contraseñas incorrectos'
            });
        }

        // Confirmar el Match de los Passwords

        const validPassword = bcrypt.compareSync(password, usuario.password)
        
        if(!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );



        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        });

    } catch (error) {
        console.log(error);
        res.status(201).json({
            ok:true,
            msg: 'Hable con el adminstrador',
        });
        
    }

}


const revalidarToken = async (req, res = response)=> {

    const {uid, name } = req;
    
    const token = await generarJWT( uid, name );

    res.json({
        ok:true,
        msg: 'renew',
        token
    });

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken

}
