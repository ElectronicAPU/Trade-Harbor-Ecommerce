import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productsModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});

export const singelProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
