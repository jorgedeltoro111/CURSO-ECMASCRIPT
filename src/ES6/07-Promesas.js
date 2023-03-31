/*
Es una forma de trabajar el asincronismo.
Concepto: es una funcion que recibe como parametro otra funcion.
*/
//Forma mas directa 
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Heyy!!');
        } else {
            reject('Whooops!!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//Ejemplo de promesas de YT - Forma mas desmenusada
let p = new Promise(function(resolve, reject){
    let suma = 2 + 2;
    if(suma === 4){
        console.log('Es correcto!');
    } else {
        console.log('Es incorrecto!');
    }
});

p.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});