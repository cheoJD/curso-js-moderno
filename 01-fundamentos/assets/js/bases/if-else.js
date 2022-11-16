// let a =  10;

// if ( a >= 10 ) {
//     console.log('A es mayor o igual a 10');
// } else {
//     console.log('A es menor a 10');
// }

// console.log('Fin de programa');

const diasSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

let dia = 3;

console.log('Hoy es ' + diasSemana[dia] || 'Día no definido');
