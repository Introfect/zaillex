const express = require("express");
const authControllers = require("../../controllers/auth");
const routes = express.Router();

routes.post("/login", authControllers.login);
routes.post("/register", authControllers.register);

module.exports = routes;