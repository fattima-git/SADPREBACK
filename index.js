const express = require('express');
const bodyParser = require('body-parser');
const ConfigEnv = require('./config');

const app = express();
const HTTP_PORT = ConfigEnv.HTTP_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
require('./routes')(app);
//app.use("/api", registros_clinicos);
//app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(HTTP_PORT, () => console.log(`Escuchando en el puerto ${HTTP_PORT}`));