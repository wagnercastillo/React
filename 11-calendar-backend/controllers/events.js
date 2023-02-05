const { response } = require('express');
const Evento = require('../models/Evento');

const obtenerEventos = (req, res = response )=> {
    

    return res.json({
        ok: true,
        msg: 'Eventos obtenidos'
    });

}

const crearEvento = async(req, res = response )=> {

    const evento = new Evento( req.body );

    try {
        
        evento.user = req.uid;
        
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarEvento = (req, res = response )=> {
    
    return res.json({
        ok: true,
        msg: 'Actualización de Eventos'
    });

}
 const eliminarEvento = (req, res = response )=> {
    
    return res.json({
        ok: true,
        msg: 'Eliminar  Eventos'
    });

}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}