import express from "express"; 
import cors from "cors"; 
import {dividir, multiplicar,restar, sumar} from './modules/matematica.js';
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';
import Alumno from './models/Alumno.js';
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
app.get('/matematica/sumar', (req,res) =>
{
    let num1 = +(req.query.n1);
    let num2 = +(req.query.n2);
    let totalsum = sumar(num1, num2)

    totalsum = totalsum.toString()
    res.send(totalsum)
    res.status(200)
})
app.get('/matematica/restar', (req,res) =>
{
    let num1 = +(req.query.n1);
    let num2 = +(req.query.n2);
    let totalrest = restar(num1, num2)

    totalrest = totalrest.toString()
    res.send(totalrest)
    res.status(200)
})
app.get('/matematica/multiplicar', (req,res) =>
{
    let num1 = +(req.query.n1);
    let num2 = +(req.query.n2);
    let multiplicacion = multiplicar(num1, num2)

    multiplicacion = multiplicacion.toString()
    res.send(multiplicacion)
    res.status(200)
})
app.get('/matematica/dividir', (req,res) =>
{
    let num1 = +(req.query.n1);
    let num2 = +(req.query.n2);

    let division = dividir(num1, num2)

    division = division.toString()
    res.send(division)
    res.status(200)
})
app.get('/omdb/searchbypage', async (req,res) =>
{
   

    let pelicula = req.query.s;
    let pagina = req.query.p;
    console.log(pelicula)
    console.log(pagina)

   let respuesta = await OMDBSearchByPage(pelicula, pagina);

    res.send(respuesta)
})
app.get('/omdb/searchcomplete', async (req,res) =>
{
    let respuesta;

    let pelicula = req.query.s;
    console.log(pelicula)

    respuesta = await OMDBSearchComplete(pelicula);

    res.send(respuesta)
})
app.get('/omdb/getbyomdbid', async (req,res) =>
{
    let respuesta;

    let id = req.query.id;
    console.log(id)

    respuesta = await OMDBGetByImdbID(id);

    res.send(respuesta)
})

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', (req,res) =>
{
    res.send(alumnosArray)
    res.status(200)
})

function encuentraMiAlumno(alumno,dni) 
{
    return alumno.DNI === dni
}

app.get('/alumnos/:DNI', (req,res) =>
{

    let dni = req.params.DNI
    console.log(dni)
    let alumnoEncontrado = alumnosArray.find(alumno => encuentraMiAlumno(alumno,dni))

    res.send(alumnoEncontrado)
})

app.post('/alumnos/:username/:DNI/:edad', (req,res) =>
{
    let username = req.params.username
    let DNI = req.params.DNI
    let edad = req.params.edad
    arrayAlumnos.push(new Alumno(username, DNI, edad))
})


//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})