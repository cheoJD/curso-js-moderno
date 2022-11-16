function saludar( nombre ) {
    console.log('Hola ' + nombre);
}

const saludar2 = function() {
    console.log('Hola Mundo');
}

const saludarFlecha = ( nombre)  => {
    console.log('Hola ' + nombre);
}

// saludar( 'Jose' );
// saludarFlecha( 'Jose' );


// const sumar = ( a,b ) => {
//     return a + b;
// }

const sumar = ( a,b ) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( sumar(2,2) );
console.log( getAleatorio2() );

