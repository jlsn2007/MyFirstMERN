import express from "express";
import productsController from "../controllers/productscontrollers.js"

//Router() nos ayuda a colocar los métodos que tendra mi ruta

const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.postProducts)

router.route("/:id")
.put(productsController.putProducts)
.delete(productsController.deleteProducts);

export default router;