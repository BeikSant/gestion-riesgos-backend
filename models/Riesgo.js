const mongoose = require('mongoose');
const { Schema } = mongoose;

const riesgoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    habilidad: {
        type: Number,
        required: true
    },
    motivo: {
        type: Number,
        required: true
    },
    oportunidad: {
        type: Number,
        required: true
    },
    tamannio: {
        type: Number,
        required: true
    },
    descubrimiento: {
        type: Number,
        required: true
    },
    explotacion: {
        type: Number,
        required: true
    },
    conciencia: {
        type: Number,
        required: true
    },
    deteccion: {
        type: Number,
        required: true
    },
    confidencialidad: {
        type: Number,
        required: true
    },
    integridad: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: Number,
        required: true
    },
    responsabilidad: {
        type: Number,
        required: true
    },
    financiero: {
        type: Number,
        required: true
    },
    reputacion: {
        type: Number,
        required: true
    },
    cumplimiento: {
        type: Number,
        required: true
    },
    privacidad: {
        type: Number,
        required: true
    },
    totalProbabilidad: {
        type: Number,
        required: true
    },
    totalImpacto: {
        type: Number,
        required: true
    },
})

const Riesgo = mongoose.model('Riesgo', riesgoSchema);
module.exports = Riesgo;