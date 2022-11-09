const registros_clinicos = require('./routes/registros_clinicos');
const path = require('path');
const ConfigEnv = require('./config');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "",
            version: ""
        },
        servers: [{
            url: ConfigEnv.HOST_API
        }]
    },
    apis: [`${path.join(__dirname,"./routes/*.js")}`],
};

module.exports = function (app){
    app.use("/api", registros_clinicos);
    app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
}