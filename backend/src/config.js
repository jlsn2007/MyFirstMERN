//Importo la libreria que acabo de instalar
import dotenv from "dotenv"

//Ejecuto "dotenv"
//me ayuda a acceder al .env
dotenv.config();

export const config = {

    db: {
        URI: process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20230170"
    },
    server: {
        port: process.env.PORT || 4000
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_SECRET,
    }
    
}