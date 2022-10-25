import {Coche as car} from './Dest.mjs'

console.log("Hola mundo");
//text, number, boolean, function, object
//let, var
//const

//let x = 5
//console.log(x);

//Funciones:
//Explicitas
//Anonimas

{
    var x =5;
}
{
    console.log(x);
}

//Funcion explicita
const S = function suma(n1, n2) {
    return (n1 + n2);
}

//Funcion flecha
const R = (n1, n2) => {
    return (n1 - n2);
}

let resultado = S(5, 3);
console.log(resultado);
console.log(R(10,8))

//object
let Persona = {
    name: "Manuel", 
    age: 30,
    //esto esta mal
    amigos: [1, true, 'hola', () => {}, {prueba: 'mal'} ],
    friends: ['Paula', 'Roberto', 'Berta'],
    //se puede crear un objeto dentro de un objeto:
    mascota: {
        name: 'maicha',
        age: 3,
        toys: ['hueso', 'pelota'],
    },
    run: function run(km) {
        console.log(`${this.name} corrio ${km} kilometros`);
    },
   
};

let clave = 'name';

console.log(Persona.age);
console.log(Persona[clave]);
console.log(Persona['name']);
console.log(Persona.amigos)
console.log(Persona.friends[0]);
console.log(Persona.mascota.name);

Persona.run(5);
//Persona.walk(3);

let arr1 = [1, 2, 3, 4, 5];
//se le pueden pasar varios parametros
//el tercero seria el array completo
function multImp(num, idx) {
    console.log('El indice ' + idx + ' tiene el valor: ' + num * 2)
    console.log(num * 2);
    return num * 2;
}
//con map cogemos todos los valores del array y la 
//funcion para que lo haga
//map siempre devuelve un array de igual tamano
arr1.map(multImp);

//si en la funcion no retornamos saen undefined
let arr2 = arr1.map(multImp);
console.log(arr2);

//la notacion comun es poner lla funcion dentro del map
let arr3 = arr2.map((num, idx) => {
    return (num * num);
})

console.log(arr3);

let arr4 = arr1.filter((num) => {
    return (num % 2 == 0);
})
console.log(arr4);

//Destructuring

let {name, age} = Persona;

console.log(name, age);


let Escuela = {
    name: '42',
    direction: 'calle alas',
    antiguedad: 30,
};

//con los ... metemos el objeto anterior entero
// y omite la clave escuela, solo mete sus variables
let Salon = {
    alumnos: 20,
    profe: 'javier',
    ...Escuela,
};
console.log(Salon)

//Destructuring de arrays
const [valor1, valor2, ...valor3] = arr1;
console.log(valor1);
console.log(valor2);
console.log(valor3);

//Destructuring de un objeto de otro archivo con import
//el import va arriba del todo
//en el import tambien se puede renombrar para uso local
console.log(car);

//funciones asincronas

const ovenHeating = () => {
    setTimeout(() => {
        console.log('Pizza Heating')
    }, 3000);
}

async function normalDay() {
    await ovenHeating();
    console.log('Cleaning');
    console.log('Watching TV');
}

normalDay();