import fetch from "node-fetch";//importamos la funcion de llamado 'fetch' 

const response = await fetch('https://api.escuelajs.co/api/v1/products'); //guardamos el resultado en response
const products = await response.json();//convertimos en un objeto json y lo exportamos

export { products };//exportacion