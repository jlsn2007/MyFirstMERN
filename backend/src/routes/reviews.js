import express from "express";
import reviewControllers from "../controllers/reviewcontrollers.js"

const router = express.Router();

router.route("/")
    .get(reviewControllers.getReviews)
    .post(reviewControllers.postReviews)
router.route("/:id")
    .put(reviewControllers.updateReviews)
    .delete(reviewControllers.deleteReviews);

export default router;