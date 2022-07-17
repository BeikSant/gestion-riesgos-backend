const Riesgo = require('../models/Riesgo');
const { calcular } = require('../utils/calculoRiesgo');

const buscarRiesgos = async (req, res) => {
    try {
        const riesgos = await Riesgo.find().lean();
        return res.json(riesgos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
}

const guardarRiesgo = async (req, res) => {
    try {
        riesgo = req.body;
        if (riesgo == {}) return res.status(400).json({ error: "No existen datos" })
        const { totalProbabilidad, totalImpacto } = calcular(riesgo);
        
        if (isNaN(totalProbabilidad) || isNaN(totalImpacto)) return res.status(403).json({ error: " Datos no validos" });
        riesgo.totalProbabilidad = totalProbabilidad;
        riesgo.totalImpacto = totalImpacto;
        const nuevoRiesgo = new Riesgo(riesgo);
        await nuevoRiesgo.save();
        return res.json(nuevoRiesgo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al guardar" });
    }
}

const verRiesgo = async (req, res) => {
    try {
        const riesgo = await Riesgo.findById({_id: req.params.id}).lean();
        if (!riesgo) return res.status(400).json({ error: "Riesgo no existente" })
        return res.json(riesgo);
    } catch (error) {
        if (error.kind === "ObjectId") return res.status(400).json({ error: "Riesgo no existente" });
        return res.status(500).json({ error: "Error de servidor" });
    }
}

const editarRiesgo = async (req, res) => {
    try {
        console.log(req.params.id);
        const riesgo = await Riesgo.findById({_id: req.params.id});
        if (riesgo == {}) return res.status(400).json({ error: "No existen datos" })
        await riesgo.updateOne(req.body);
        return res.status(200).json({ ok: true });
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") return res.status(400).json({ error: "Riesgo no existente" });
        return res.status(500).json({ error: "Error de servidor" });
    }
}

const eliminarRiesgo = async (req, res) => {
    try {
        const riesgo = await Riesgo.findById(req.params.id);
        if (!riesgo) return res.status(400).json({ error: "Riesgo no existente" })
        await riesgo.remove();
        return res.status(200).json({ ok: true });
    } catch (error) {
        if (error.kind === "ObjectId") return res.status(400).json({ error: "Riesgo no existente" });
        return res.status(500).json({ error: "Error de servidor" });
    }
}

module.exports = {
    buscarRiesgos,
    guardarRiesgo,
    verRiesgo,
    eliminarRiesgo,
    editarRiesgo
}


