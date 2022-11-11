const registros_clinicos = require('../db/models/registros_clinicos');

const getRegistrosClinicos = async() => {
    return await registros_clinicos.getRegistrosClinicos();
};
const getRegistroClinico = async(id) => {
    return await registros_clinicos.getRegistroClinico(id);
};

const getSintomas = async() => {
    return await registros_clinicos.getSintomas();
};

const getPaciente = async() => {
    return await registros_clinicos.getPaciente();
};

const setPaciente = async(req) => {
    return await registros_clinicos.setPaciente(req);
};

const setRegistroClinico = async(req) => {
    const {paciente, fecha, sintomas} = req.body;
    var diagnosticos =[];
    var paciente_datos = await registros_clinicos.getPaciente(paciente);
    for (let i=0; i< sintomas.length; i++){
        if(paciente_datos.edad > 70 && sintomas[i] == 2 ){
            diagnosticos.push(2);
        }
        if(paciente_datos.edad > 70 && sintomas[i] == 1 ){
            diagnosticos.push(3);
        }
        
    }
    return await registros_clinicos.setRegistroClinico(paciente, fecha, sintomas, diagnosticos);
};

module.exports = {
    getRegistrosClinicos,
    getRegistroClinico,
    getSintomas,
    getPaciente,
    setPaciente,
    setRegistroClinico
};