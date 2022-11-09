const registros_clinicos = require('../db/models/registros_clinicos');

const getRegistrosClinicos = async() => {
    return await registros_clinicos.getRegistrosClinicos();
};
const getRegistroClinico = async(id) => {
    return await registros_clinicos.getRegistroClinico(id);
};

const setPaciente = async(req) => {
    return await registros_clinicos.setPaciente(req);
};

const setRegistroClinico = async(req) => {
    return await registros_clinicos.setRegistroClinico(req);
};

module.exports = {
    getRegistrosClinicos,
    getRegistroClinico,
    setPaciente,
    setRegistroClinico
};