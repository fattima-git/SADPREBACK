const db = require('../db')

const getRegistrosClinicos = async() => {
    try {
        datos = await db.pool.query('SELECT nro_documento, pacientes.nombres, apellido, fecha, STRING_AGG(DISTINCT sintomas.nombre,\', \') AS sintomas, STRING_AGG(DISTINCT diagnostico, \', \') AS diagnosticos FROM registros_clinicos JOIN pacientes ON (registros_clinicos.paciente = pacientes.id) JOIN diagnosticos ON (diagnosticos.id = ANY(registros_clinicos.diagnosticos)) JOIN sintomas ON (sintomas.id = ANY(registros_clinicos.sintomas)) GROUP BY nro_documento, pacientes.nombres, apellido, fecha;');
        return datos.rows;
    } catch (error) {
        return null;
    }
}

const getRegistroClinico = async(id) => {
    try {
        datos = await db.pool.query('SELECT nro_documento, pacientes.nombres, apellido, fecha, STRING_AGG(DISTINCT sintomas.nombre,\', \') AS sintomas, STRING_AGG(DISTINCT diagnostico, \', \') AS diagnosticos FROM registros_clinicos JOIN pacientes ON (registros_clinicos.paciente = pacientes.id) JOIN diagnosticos ON (diagnosticos.id = ANY(registros_clinicos.diagnosticos)) JOIN sintomas ON (sintomas.id = ANY(registros_clinicos.sintomas)) WHERE pacientes.nro_documento = $1 GROUP BY nro_documento, pacientes.nombres, apellido, fecha;', [id]);
        return datos.rows;
    } catch (error) {
        return null;
    }
}

const setPaciente = async(req) => {
    const {nombres, apellido, sexo, nro_documento, edad} = req.body
    try {
        datos = await db.pool.query('INSERT INTO public.pacientes(nombres, apellido, sexo, nro_documento, edad) VALUES ($1, $2, $3, $4, $5);',[nombres, apellido, sexo, nro_documento, edad]);
        return 0;
    } catch (error) {
        return null;
    }
}

const setRegistroClinico = async(req) => {
    const {paciente, fecha, sintomas, diagnosticos} = req.body
    try {
        datos = await db.pool.query('INSERT INTO public.registros_clinicos(paciente, fecha, sintomas, diagnosticos) VALUES ($1, $2, $3, $4);',[paciente, fecha, sintomas, diagnosticos]);
        return 0;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getRegistrosClinicos,
    getRegistroClinico,
    setPaciente,
    setRegistroClinico
  }