const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

const bookRoutes = require("./routes/book.routes");

// Usamos express para los middlewares
const app = express();

// Parseador de Bodies
app.use(bodyParser.json());

// Acá se conectara la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
