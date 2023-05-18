const axios = require('axios');
const express = require("express");
const departamentoMunicipio = require('../models/departamentoMunicipio');
const app = express.Router();

app.get("/datosabiertos", async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        )
        const data = response.data;
        /*Gestionar la información en la base de datos */
        await departamentoMunicipio.deleteMany();
        await departamentoMunicipio.insertMany(data);
        res.send('Datos almacenados en la MongoDB')
    } catch {
        console.log('error accediendo al json',error);
        res.status(500).send('Error al acceder al json');
    }
});


app.get("/departamentos", async (req, res) => {
  try {
    const departamento = req.query.departamento;
    let query = {};
    if (departamento) {
      query.departamento = departamento;
    }

    
    const data = await departamentoMunicipio.aggregate([
      {
        $group: {
          _id: "$departamento",
          municipios: {
            $push: "$municipio"
          }
        }
      }
    ]);

    res.send(data);
  } catch (error) {
    console.log("error accediendo a la base de datos", error);
    res.status(500).send("Error al acceder a la base de datos");
  }
});

  
  
/*app.get("/departamentos", async (req, res) => {
    try {
      const data = await departamentoMunicipio.find();
      res.send(data);
    } catch (error) {
      console.log("error accediendo a la base de datos", error);
      res.status(500).send("Error al acceder a la base de datos");
    }
  });*/
  
  

module.exports = app


