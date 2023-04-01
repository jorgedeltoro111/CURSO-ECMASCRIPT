const btn = document.getElementById('btn');//seleccionamos el boton
btn.addEventListener('click', async function () {//creamos el evento y su funcion anonima
    const module = await import('./module.js');//importamos el modulo a la constante 'module'
    console.log(module);//mostramos lo que tiene module en consola
    module.hello();//ejecutamos el metodo
});