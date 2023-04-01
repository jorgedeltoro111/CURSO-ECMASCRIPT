class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){//indicamos con el simbolo de gato que se volvera un metodo privado
        return 'Hello';
    }
    #greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(newAge){
        this.age = newAge;
    }
    get #uName(){
        return this.name;
    }
    set #uName(newName){
        this.name = newName;
    }
}
const jorge = new User('jorge', 21);
