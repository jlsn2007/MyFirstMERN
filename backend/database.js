import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js"

// Configurar la URI o dirección de la base de datos
//const URI = "mongodb://localhost:27017/ZonaDigitalDB20230170";

// Conectarme a la base de datos
mongoose.connect(config.db.URI);

// Comprobar que todo funcione
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is Connected");
});

connection.on("disconnected", () => {
    console.log("DB is Disconnected");
});

connection.on("error", (error) => {
    console.log("error found: "  + error);
});

