//Creacion y retornar un objeto con funcion ES6
function newUser(user, age, country, uId){
    return{ //retornamos un objeto con los valores que le pasamos a la funcion
        user,
        age,
        country,
        id
    }
}
//nos muestra los atrubutos de objeto
console.log(newUser('jorge', 21, 'MX', 1)); 