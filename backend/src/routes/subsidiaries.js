import express from "express";
import subsidiariesControllers from "../controllers/subsidiariescontrollers.js";

const router = express.Router();

router.route("/")
.get(subsidiariesControllers.getSubsidiaries)
.post(subsidiariesControllers.postSubsidiaries)

router.route("/:id")
.put(subsidiariesControllers.putSubsidiaries)
.delete(subsidiariesControllers.deleteSubsidiaries);

export default router;