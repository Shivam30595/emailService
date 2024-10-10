const express = require("express");
const emailRoutes = express.Router();
const emailController = require("../controllers/emailController");

emailRoutes.post("/send", emailController);

module.exports = emailRoutes;
