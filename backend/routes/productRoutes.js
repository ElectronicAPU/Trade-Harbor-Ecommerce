import express from "express";
import {
  createProduct,
  getAllProducts,
  singelProduct,
  updateProduct,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Products Routes
router.route("/").get(getAllProducts).post(protect, admin, createProduct);
router.route("/:id").get(singelProduct).put(protect, admin, updateProduct);

export default router;
