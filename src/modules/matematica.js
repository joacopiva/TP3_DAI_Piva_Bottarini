const PI = 3.14;
const sumar = (x, y) =>
{
    return x+y;
}

const restar = (x,y) =>
{
    return x-y;
}

const multiplicar = (a, b) => 
{
    return a*b;
};

const dividir = (a,b) =>
{
    return a/b;
}

let Array1 = ["dos", "cuatro", "ocho", "diez"];

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar, restar, dividir, Array1};