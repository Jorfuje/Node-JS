// Carga las variables de entorno desde el archivo .env
require('dotenv').config(); // Las variables de entorno se establecen en el objeto process y están disponibles globalmente

// Importa la función get del módulo env-var para gestionar variables de entorno
const { get } = require('env-var');

// Define un objeto que contiene las variables de entorno necesarias
const envs = {
    // Obtiene el puerto desde las variables de entorno, requiere que esté definido y lo convierte a número de puerto
    PORT: get('PORT').required().asPortNumber(),
    
    // Obtiene la ruta pública desde las variables de entorno, establece 'public' como valor por defecto y lo convierte a cadena
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
};

// Exporta el objeto envs para que pueda ser utilizado en otros archivos
module.exports = {
    envs
};
