import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHanler, notFound } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHanler);

app.listen(port, () => {
  console.log(`Server listening on ${port}`.black.bgWhite);
});
