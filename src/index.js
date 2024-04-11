import express from "express"; 
import cors from "cors"; 
const app = express();
const port = 3000;


// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//


//
app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})
app.get('/saludar', (req, res) => { // EndPoint "/saludar"
res.send('Hello World!');
})

app.get('/validarfecha/', (req, res) => {

    let fecha = new Date(req.query.ano, req.query.mes, req.query.dia)
    console.log(req.query.ano)
    console.log(req.query.mes)
    console.log(req.query.dia)
    console.log(fecha)

    if(!isNaN(fecha))
    {
        res.status(200)
    }
    else
    {
        res.status(400)
    }
    res.send(fecha)
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
