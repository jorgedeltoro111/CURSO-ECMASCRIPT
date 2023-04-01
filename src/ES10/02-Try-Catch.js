//try catch tradicional
try {
    hello();
}catch(error){
    console.log(error);
}
//try catch personalizado
try {
    anotherFn();
} catch {
    console.log('No funciono');
}