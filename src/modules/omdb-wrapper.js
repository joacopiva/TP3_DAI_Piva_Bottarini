/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "d22189a8"; 
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    
    const apiResponse = await axios.get(requestString);
    let datos = apiResponse.data;
    returnObject.respuesta = datos.Response;
    returnObject.cantidadTotal = datos.totalResults;
    returnObject.datos = datos.Search;
    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;

const apiResponse = await axios.get(requestString);
let datos = apiResponse.data;
returnObject.respuesta = datos.Response;
returnObject.cantidadTotal = datos.totalResults;
returnObject.datos = datos.Search;

return returnObject;

};
const OMDBGetByImdbID = async (imdbID) => {

const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;

const apiResponse = await axios.get(requestString);
let datos = apiResponse.data;

return datos;

};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};