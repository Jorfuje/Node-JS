// Importa el módulo express
const express = require('express');

// Importa el módulo path para manejar rutas de archivos
const path = require('path');

// Función que inicia el servidor
const startServer = (options) => {
    // Desestructura las opciones para obtener el puerto y la ruta pública
    const { port, public_path = 'public' } = options;

    // Crea una instancia de la aplicación Express
    const app = express();

    // Usa middleware para servir contenido estático desde la ruta pública
    app.use(express.static(public_path)); // Contenido estático que ponemos disponible

    // Maneja todas las solicitudes GET con cualquier ruta
    app.get('*', (req, res) => {
        // Construye la ruta completa al archivo index.html
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        // Envía el archivo index.html como respuesta
        res.sendFile(indexPath);
    });

    // Inicia el servidor en el puerto especificado
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`);
    });
}

// Exporta la función startServer para que pueda ser usada en otros archivos
module.exports = {
    startServer
};
