// Forma anterio de hacer las importaciones y exportaciones
// const { getTitle, getAuthor } = require("./fuctions");
// const { curso } = require("./objects");
// const { nombre, autor } = curso;

// console.log(getTitle());
// console.log(getAuthor("Jorfuje"));
// console.log(nombre);
// console.log(autor);


// Forma actual de hacer importaciones y exportaciones
// Agregar la siguiente linea en package.json:   "type": "module",
// para poder hacer las importaciones y exportaciones así
import { getTitle, getAuthor } from './fuctions.js';
import { curso } from './objects.js';

const { nombre, autor } = curso;

console.log(getTitle());
console.log(getAuthor("Jorfuje"));
console.log(nombre);
console.log(autor);

