const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./database/db')

const app = express();

const whileList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || whileList.includes(origin)) {
            return callback(null, origin);
        }
        return callback("Error de CORS origin: " + origin + " No autorizado");
    }
}));

app.use(express.json()); //Sirve para leer las archivos json

app.use('/api/v1/risk', require('./routes/risk.routes'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Servidor Corriendo http://localhost:" + PORT);
});