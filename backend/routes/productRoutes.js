import express from "express";
import {
  getAllProducts,
  singelProduct,
} from "../controller/productController.js";

const router = express.Router();

// Products Routes
router.get("/", getAllProducts);
router.get("/:id", singelProduct);

export default router;
