export default class Alumno {
    constructor(username, DNI, edad) { 
    this.username = username;
    this.DNI = DNI;
    this.edad = edad;
    }
    getUserName() 
    {
        return this.username;
    }
    getDNI() 
    {
        return this.DNI;
    }
    getEdad()
    {
        return this.edad;
    }

    
}

Alumno.prototype.toString = function AlumnoToString() {
    var retorno = `Alumno ${this.username}, DNI: ${this.DNI}, Edad ${this.edad}`;
    return retorno;
  };
    