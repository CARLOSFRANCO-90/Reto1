
const express = require ("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

const rutadb = "mongodb+srv://electiva1:electiva2@cluster9.muninbp.mongodb.net/practice1?retryWrites=true&w=majority"
//conexion al puerto 6000
const app = express();
const port = process.env.PORT || 6000;

//puerto de activacion del servicio     
app.listen(port, () => console.log("server listening on port ", port ));

//middlewares 
app.use(express.json());
app.use("/api", userRoute);

// primer request para acceder desde el navegador http:localhost:6000
app.get('/electiva', (req, res ) => res.send('programacion III'))

// conexion a la base de datos de monnDB
mongoose   
        .connect(rutadb)
        .then(()=>console.log('Connect with mongodb'))
        .catch((error)=>console.error(error));


        app.use("/api/v1/people", userRoute)
