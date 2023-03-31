//arrays destructuring
let fruits = ['Apple', 'banana', 'pineapple'];
let [a, b, c] = fruits;
console.log(a, b, c);
//objets destructuring
let user = {name: 'Jorge', age: 21};
let {name, age} = user;
console.log(name, age);

//spread operator - propagacion
//con los 3 puntos indicamos que vamos a extraer todos atributos del objeto
let person = {name: 'Jorge', age: 21}; 
let country = 'MX';
let data = { ...person, country };
console.log(data);

//rest
function sum(num, ...values){//indicamos que le pasaremos varios parametros
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 5);

