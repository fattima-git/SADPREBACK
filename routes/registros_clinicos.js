const express = require('express');
const registros_clinicos = require('../controllers/registros_clinicos.js');

const router = express.Router();

    router.post('/cargarpaciente', async (req, res) => {
        res.json(await registros_clinicos.setPaciente(req));
    });

    router.post('/cargarregistro', async (req, res) => {
        res.json(await registros_clinicos.setRegistroClinico(req));
    });

    router.get('/sintomas', async (req, res) => {
        res.json( await registros_clinicos.getSintomas());
    });

    /**
     * @swagger
     * components:
     *  schemas:
     *      Registro_clinico:
     *          type: object
     *          properties:
     *              nro_documento:
     *                  type: integer
     *                  description: numero de documento
     *              nombres:
     *                  type: string
     *                  description: nombre de la persona
     *              apellido:
     *                  type: string
     *                  description: apellido de la persona
     *              fecha:
     *                  type: string
     *                  description: fecha del registro clinico
     *              sintomas:
     *                  type: string
     *                  description: hora hasta del encuentro presencial
     *              diagnosticos:
     *                  type: string
     *                  description: estado del encuentro presencial
     *              
     *          required:
     *              - nro_documento
     *              - nombres
     *              - apellido
     *              - fecha
     *              - sintomas   
     *              - diagnosticos
     */



   /**
    * @swagger
    * /api/registros_clinicos:
    *   get:
    *       summary: return all registros_clinicos
    *       tags: [Registro_clinico]
    *       responses:
    *           200:
    *               description: all registros_clinicos
    *               content:
    *                   application/json:
    *                       schema:
    *                           type: array
    *                           items:
    *                               $ref: '#/components/schemas/Registro_clinico'
    */
    router.get('/registros_clinicos', async (req, res) => {
         res.json( await registros_clinicos.getRegistrosClinicos());
    });


    // get one registro_clinico
   /**
    * @swagger
    * /api/registro_clinico/{id}:
    *   get:
    *       summary: return a registro_clinico
    *       tags: [Registro_clinico]
    *       parameters:
    *           - name: id
    *             description: id del registro_clinico
    *             type: number
    *             in: path
    *             required: true
    *       responses:
    *           200:
    *               description: registro_clinico
    *               content:
    *                   application/json:
    *                       schema:
    *                           type: array
    *                           items:
    *                               $ref: '#/components/schemas/Registro_clinico'
    *           400:
    *               description: registro clinico no existe
    */
    router.get('/registro_clinico/:id', async (req, res) => {
        const {id}  = req.params;
        res.json(await registros_clinicos.getRegistroClinico(id));
    });

   


module.exports = router;