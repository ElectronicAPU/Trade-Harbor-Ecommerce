import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  deleteUsers,
  updateUsers,
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutrUser);
//login
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUsersByID)
  .put(protect, admin, updateUsers);

export default router;
