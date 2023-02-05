/**
    Events Routes
    api/events
*/

const { Router } = require("express");
const { check } = require('express-validator');
const router = Router();

const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento,
            } = require("../controllers/events");
const { validarJWT, validarCampos } = require("../middlewares");
const { isDate } = require("../helpers/isDate");
            
router.use( validarJWT ); // Las rutas tienes que pasar por la validación de JWT

router.get("/", obtenerEventos);

router.post("/", [

  check('title', 'El titulo es necesario').not().isEmpty(),
  check('start', 'El fecha de inicio es necesario').custom(isDate).not().isEmpty(),
  check('end', 'end es necesario').custom(isDate).not().isEmpty(),
  check('user', 'El user es necesario'),  
  validarCampos
  
], crearEvento);

router.put("/:id", [
  check('title', 'El titulo es necesario').not().isEmpty(),
  check('start', 'El fecha de inicio es necesario').custom(isDate).not().isEmpty(),
  check('end', 'end es necesario').custom(isDate).not().isEmpty(),
  check('user', 'El user es necesario'),  
  validarCampos
], actualizarEvento);

router.delete("/:id",  eliminarEvento);


module.exports =  [
    router
]

    