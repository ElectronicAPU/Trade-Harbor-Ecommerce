import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productsModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const singelProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product); // Use return here to prevent further code execution
    }

    return res.status(404).json({ message: "Product not found" }); // Use return here as well
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
