// Importa las variables de entorno desde el archivo de configuración
// const { envs } = require('./config/env');

import { envs } from './config/env.js';

// Importa la función que inicia el servidor desde el archivo correspondiente
// const { startServer } = require('./server/server');

import { startServer } from './server/server.js';

// Función principal que se encarga de iniciar el servidor
const main = () => {
  startServer({
    // Pasa el puerto y la ruta pública como parámetros al servidor
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  });
};

// Función anónima autoinvocada
// Anónima porque no tiene nombre
// Autoinvocada porque se ejecuta automáticamente al definirse con los paréntesis finales
(async () => {
  main(); // Llama a la función principal para iniciar el servidor
})();
