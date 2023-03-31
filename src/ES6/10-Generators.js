//Un generador es un tipo de funcion que nos va a regresar diferentes valores
//dependiendo del algoritmo
function* iterate(array){
    for (let element of array) {
        yield element;
    }
}
const it = iterate(['jorge', 'pedro', 'david', 'ana', 'ulises']);
//esta function de generador recuerda su estado y cada vez que le mandamos llamar podemos 
//observar que sigue cronologicamente los elementos del array dado, para eso el return con yield
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//recordando ese estado