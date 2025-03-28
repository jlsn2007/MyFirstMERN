//Importo todo lo d la libreria de Express
import express from "express";
import productRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js";
import employeesRoutes from "./src/routes/employees.js";
import subsidiariesRoutes from "./src/routes/subsidiaries.js";
import reviewRoutes from "./src/routes/reviews.js";
import registerRoutes from "./src/routes/Registreremployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import cookieParser from "cookie-parser";

//Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

//ue postman acepte guardar cookies
app.use(cookieParser())

//Definir las rutas de las funciones que tendrá la pág web
app.use("/api/products", productRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/subsidiaries", subsidiariesRoutes)
app.use("/api/reviews", reviewRoutes)

app.use("/api/Registreremployees", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

//Exporto la constante para poder usar express en otros archivos
export default app;