const calcular = (r) => {
    try {
        sAmenaza = r.habilidad + r.motivo + r.oportunidad + r.tamannio;
        sVulnerabilidad = r.descubrimiento + r.explotacion + r.conciencia + r.deteccion;
        totalProbabilidad = (sAmenaza + sVulnerabilidad) / 8;
        sImpTecnico = r.confidencialidad + r.integridad + r.disponibilidad + r.responsabilidad;
        sImpNegocio = r.financiero + r.reputacion + r.cumplimiento + r.privacidad;
        totalImpacto = (sImpTecnico + sImpNegocio) / 8;
        return {totalProbabilidad, totalImpacto};
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    calcular
}