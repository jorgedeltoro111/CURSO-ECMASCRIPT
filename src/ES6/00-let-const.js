//Primera actualizacion importante para JS
function scope(){
    if(true){
        var name = 'Jorge';
        let name2 = 'Enrique';
        const name3 = 'Alfredo';
    }
    console.log(name);//esta es la unica variable global
    console.log(name2);//Estas variables no podran visualizarse por el scope
    console.log(name3);
}
