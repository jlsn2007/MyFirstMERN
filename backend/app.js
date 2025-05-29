//Importo todo lo d la libreria de Express
import express from "express";
import productRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js";
import employeesRoutes from "./src/routes/employees.js";
import subsidiariesRoutes from "./src/routes/subsidiaries.js";
import reviewRoutes from "./src/routes/reviews.js";
import registerEmployeesRoutes from "./src/routes/Registreremployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import cookieParser from "cookie-parser";
import registerCustomerRoutes from "./src/routes/registrerCustomers.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import providersRoutes from "./src/routes/providers.js"
import { validateAuthToken } from "./src/middleware/validateAuthToken.js";
import cors from "cors";

//Creo una constante que es igual a la libreria que importé
const app = express();

app.use(
    cors({
      origin: 'https://my-first-mern-h6w6.vercel.app', 
      credentials: true, // Permitir envío de cookies y credenciales
    })
  );

//Que acepte datos en json
app.use(express.json());

//ue postman acepte guardar cookies
app.use(cookieParser())

//Definir las rutas de las funciones que tendrá la pág web
//app.use("/api/products", validateAuthToken (["admin", "employee"]), productRoutes)
app.use("/api/products", productRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/subsidiaries", subsidiariesRoutes)
app.use("/api/reviews", reviewRoutes)
app.use("/api/registerCustomers", registerCustomerRoutes)
//app.use("/api/Registreremployees", validateAuthToken (["admin"]), registerEmployeesRoutes);
app.use("/api/Registreremployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
//app.use("/api/providers", validateAuthToken(["admin"]), providersRoutes);
app.use("/api/providers", providersRoutes);
//Exporto la constante para poder usar express en otros archivos
export default app;