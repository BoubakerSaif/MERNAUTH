const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//@desc Register new user
//route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, image } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    image,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

//@desc Authuser
//route POST /api/users/auth
//@access Public

const authUser = asyncHandler(async (req, res) => {
  res.json({ message: "Auth user" });
});

//@desc Logout User
//route POST /api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Logged out" });
});

//@desc  UserProfile
//route GET /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.json({ message: "User Profile" });
});

//@desc Update User
//route PUT /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.json({ message: "User Update" });
});

module.exports = {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
