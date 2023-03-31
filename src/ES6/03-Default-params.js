//Forma antigua de hacerlo 
function newUser(name, age, country){
    //Asignando valores por defecto en el caso de que no se le asignen
    var name = name || 'Jorge';
    var age = age || 21;
    var country =  country || 'Mexico';
    console.log(name, age, country);
}
newUser('pedro', 12);
//Forma de hacerlo con ecma script 6
function newAdmin(name = 'Jorge', age = 21, country = 'MX'){
    console.log(name, age, country);
}
newAdmin('alberto', 50, 'AL');
newAdmin();