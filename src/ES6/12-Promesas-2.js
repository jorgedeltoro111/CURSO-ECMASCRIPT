const datos = [
    {
        name: 'Titanic', 
        year: 2020
    },
    {
        name: 'La princesa',
        year: 2021
    },
    {
        name: 'El estudiante',
        year: 2015
    }
]
const getDatos = () => {
    return new Promise((resolve, reject) => {//creamos una nueva promesa que vamos a retornar
        setTimeout(() => {//dado un cierto tiempo
            resolve(datos);//llamamos a resolve y le pasamos los datos
        }, 1500);
    });
}
//primera forma de llamar a la promesa sin async ni await
// getDatos()//llamar a funcion
//     .then((datos) => console.log(datos))//y cuando se resuelva retornara lo que contiene resolve
//     .catch((error)=> console.log(error));//mostramos el error

//Segunda forma de hacer lo mismo pero con async y await
async function data ()  {
    try{    
        const info = await getDatos();
        console.log(info);
    }catch(error){
        console.log(error);
    }
}
data();