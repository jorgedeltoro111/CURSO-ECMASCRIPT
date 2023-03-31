const user = {name: 'jorge', age: 21, country: 'MX'};
const {name, ...values} = user;
console.log(name);
console.log(values);
//extraer toda la informacion con los valores de atributos
