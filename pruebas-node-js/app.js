// Importa el módulo 'fs' que permite trabajar con el sistema de archivos
const fs = require('fs');

// Lee el archivo 'poema.txt' de manera síncrona y lo almacena en la variable 'poema' como una cadena de texto
const poema = fs.readFileSync('poema.txt', 'utf-8');

// Reemplaza todas las apariciones de 'Node.js' (sin importar mayúsculas o minúsculas) por 'NodeJS'
// y almacena el resultado en la variable 'poemaModified'
const poemaModified = poema.replace(/Node.js/ig, 'NodeJS');

// Escribe el contenido modificado en un nuevo archivo llamado 'poemaModified.txt'
fs.writeFileSync('poemaModified.txt', poemaModified);

// Imprime el contenido original del poema en la consola
console.log(poema);
