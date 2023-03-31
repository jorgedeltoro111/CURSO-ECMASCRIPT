//Mejora a nivel de sintaxis con la herencia en las clases
//Declaracion de clase
class Usuario {};

class usuario {
    //metodos
    constructor(){
        console.log('Nuevo usuario');
    }
    saludo(){
        return 'Hola';
    }
};
const jorge = new usuario();
console.log(jorge.saludo());

//this y como se usa
class user{
    constructor(name, lastName){ //constructor de inicializacion
        this.name = name;//asignando los valores
        this.lastName = lastName;
    }
    fullName(){//metodo para mostrar el nombre completo
        return `Hola ${this.name} ${this.lastName}`;//concatenacion
    }
}
const usuario1 = new user('jorge', 'del toro');//instancia de clase
console.log(usuario1.fullName());//llamada del metodo 

//setters and getters
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge(){
        return this.age;
    }
    set uAge(newAge){
        this.age = newAge;
    }
    get uName(){
        return this.name;
    }
    set uName(newName){
        this.name = newName;
    }
}
const user1 = new User('Juan', 15);
console.log(user1.greeting());//mostramos los valores originales
user1.uName = 'Jorge';//seteamos el nombre con el metodo set
console.log(user1.greeting());//mostramos la modificacion
