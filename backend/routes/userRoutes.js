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

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutrUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUsers).get(getUsersByID).put(updateUsers);

export default router;
