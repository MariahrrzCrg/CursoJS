//comentario de una linea
/*comentio multiple
*/
//console.time("iniciojs")
//PROMESAS
//console.timeEnd("Iniciiojs")
//variables
//tipo(acceso) nombre = valor
const NOMBRE = "María";
console.log("Mi nombre es"+ NOMBRE);
var edad = 20;
console.log("Mi edad es" + edad);
let experiencia = true;

let nombreString="nombre";
let edadNumber = 13;
let edadNumberDecimal =14.4;
let experienciaBoolean= false;
let cualquiernull= null;
let cosasSinDefinir = undefined;
let cosasColeccionm=["uno","dos",1,true];
let cosasColeccionMultiple =[[1,3],
[true,false],
[3,5,7,9]
];
let variableOBjeto = {
nombre:"Maria",
edad:19, 
experiencia: true,
hobbies:["futbol","cine"],
};
let fecha = new Date();
let palabraObject = new String("nombre objeto");

console.log("Mi nombre es:" + NOMBRE + "y tengo "+ edad + " y tengo experiencia "+ experiencia)
console.log(`Mi nombre es:${NOMBRE} y tengo ${edad}  y mi experiencia es ${experiencia}`)
console.log("Mi nombre es %s y tengo %d y mi experiencia es %o",NOMBRE, edad, experiencia);

console.log(typeof edadNumberDecimal);
