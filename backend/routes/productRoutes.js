import express from "express";
import {
  getAllProducts,
  singelProduct,
} from "../controller/productController.js";

const router = express.Router();

// Products Routes
router.route("/").get(getAllProducts);
router.route("/:id").get(singelProduct);

export default router;
