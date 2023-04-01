const users = {//objetos con hijos
    jorge:{
        country: 'MX'
    },
    pablo:{
        country: 'PE'
    }
}
//con el signo de interrogacion preguntamos si existe ese elemento o propiedad.
console.log(users?.rosa?.country);
