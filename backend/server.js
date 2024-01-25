import path from "path";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();
const app = express();

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser Middleware
app.use(cookieParser());

app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// *** For Productions ***
if (process.env.NODE_ENV === "production") {
  // set static folder path
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // any route that is not API will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on ${port}`.black.bgWhite);
});
