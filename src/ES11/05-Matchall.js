//verificador
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, banana, correo';//recurso donde vamos a filtrar la palabra 'apple'

for(const match of fruit.matchAll(regex)){
    console.log(match);
}

//Analisis de un string
