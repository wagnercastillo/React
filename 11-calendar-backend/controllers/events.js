const { response } = require('express');
const Evento = require('../models/Evento');

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

const obtenerEventos = async (req, res = response )=> {
    
    const eventos = await Evento.find().populate('user'); 
    // .populate('user', 'name password');  Otra opción del populate para obtener solo los datos requeridos

    return res.json({
        ok: true,
        msg: 'Eventos obtenidos',
        eventos
    });

}

const actualizarEvento = async (req, res = response )=> {
    
    const eventoId = req.params.id;
    
    try {
        
        const evento = await Evento.findById(eventoId);
        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese ID'
            })
        }

        if(evento.user.toString() !== req.uid ){
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegios para editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );
        // El ultimo o tercer parametro permite mandar la información actualizada

        res.status(200).json({
            ok: true,
            msg: 'Evento actualizado', 
            evento: eventoActualizado
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
 
}
 const eliminarEvento = async (req, res = response )=> {
    
    const eventoId = req.params.id;
    
    try {
        
        const evento = await Evento.findById(eventoId);
        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese ID'
            })
        }

        if(evento.user.toString() !== req.uid ){
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegios para eliminar este evento'
            })
        }

      
        await Evento.findByIdAndDelete(eventoId);

        res.status(200).json({
            ok: true,
            msg: 'Evento eliminado', 
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    

}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}