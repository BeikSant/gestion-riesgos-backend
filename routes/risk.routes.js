const express = require('express');
const { buscarRiesgos, guardarRiesgo, verRiesgo, eliminarRiesgo, editarRiesgo } = require('../controllers/risk.controller');
const router = express.Router();

router.get('/listar', buscarRiesgos); // Devuelve todos los riesgos registrados
router.post('/guardar', guardarRiesgo); //Devuelve el riesgo con los calculos
router.get('/eliminar/:id', eliminarRiesgo); //Eliminar un riesgo
router.post('/editar/:id', editarRiesgo);
router.get('/ver/:id', verRiesgo); // Permite buscar un riesgo en particular

module.exports = router; 