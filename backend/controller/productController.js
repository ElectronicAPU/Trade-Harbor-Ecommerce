import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productsModel.js";

// @desc    Fetch all products
// @route   GET/ api/products
// @access  Public
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});


// @desc    Fetch a product
// @route   GET/ api/products/:id
// @access  Public
export const singelProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
