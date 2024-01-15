import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST/ api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Register a user
// @route   POST/ api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Logout a user / clear the cookies
// @route   POST/ api/users/logout
// @access  Private
const logoutrUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET/ api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT/ api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Get users
// @route   GET/ api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get user");
});

// @desc    Get users by ID
// @route   GET/ api/users/:id
// @access  Private/Admin
const getUsersByID = asyncHandler(async (req, res) => {
  res.send("get user by ID");
});

// @desc    Delete users
// @route   DELETE/ api/users/:id
// @access  Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc    Update users
// @route   PUT/ api/users/:id
// @access  Private/Admin
const updateUsers = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  deleteUsers,
  updateUsers,
};
