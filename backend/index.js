import express from "express";
import bodyParser from 'body-parser'

import connect_mongodb from "./db/connect.js";
import router from './routes/router.js'

const server = ()=>{
    
    const app = express();
    //puerto de la api
    const PORT = process.env.PORT || 3000;
    //conexión a la base de datos mongodb
    connect_mongodb()
    //middleware para parsear los datos del metodo POST
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Configurar cabeceras y cors
    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


    //ruta de la API
    app.use('/api', router)
    //puerto en escucha de la api
    app.listen(PORT, console.log(`http://localhost:${PORT}`))

}

export default server;

