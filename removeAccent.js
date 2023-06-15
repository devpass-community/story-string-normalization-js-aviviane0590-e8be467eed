function removeAccent(str) {
    const semAcento = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return semAcento;
}

module.exports = removeAccent;
