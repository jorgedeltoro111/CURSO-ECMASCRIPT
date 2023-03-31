//Forma antigua de concatenar strings
let firstName = 'Jorge';
let lastName = 'Enrique';
//let completeName = name + ' ' + lastName;

//Forma actual de concatenar elementos con template literals
let completeName = `Hola ${firstName} ${lastName}, bienvenido`;
console.log(completeName);

//Multi-line strings
//esto es la forma antigua de dar un salto de linea
let lorem = 'Esto es un string \n ' + 'esto es otra linea';
//esto es la forma nueva de dar un salto de linea con template literals
let lorem2 = `Esto es un string 
pero con salto de linea`;
console.log(lorem2);