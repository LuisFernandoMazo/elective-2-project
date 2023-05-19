const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constans");
const app = express();
/*cargar rutas */
const autoRoutes = require ("./src/routes/auth");
const departamentoMunicipio = require("./src/routes/departamentoMunicipio");

const roucategory = require("./src/routes/category");
const rouPost = require("./src/routes/post");
//const userRoutes = require ("./src/routes/user");


/*Trabajar con la extension client-rest */
app.use(bodyParser.json());
/* Pruebas de request utilizando postman*/
app.use(bodyParser.urlencoded({extended: true}));

/* Evitar bloqueos en el navegador cuando estemos trabajando con el backend y el front end a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, autoRoutes);
app.use(`/api/${API_VERSION}/`, departamentoMunicipio); 
app.use(`/api/${API_VERSION}/categories`, roucategory);
app.use(`/api/${API_VERSION}/posts`, rouPost);

//app.use(`/api/${API_VERSION}`, userRoutes);
module.exports = app;
