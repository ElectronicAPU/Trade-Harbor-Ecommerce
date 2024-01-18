import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  singelProduct,
  updateProduct,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Products Routes
router.route("/").get(getAllProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(singelProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
