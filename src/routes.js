const express = require("express");

const CompanyController = require("./controllers/CompanyController");
const EmployeeController = require("./controllers/EmployeeController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/company", CompanyController.index);
routes.post("/company", CompanyController.create);

routes.get("/profile", ProfileController.index);

routes.post("/employee", EmployeeController.create);
routes.get("/employee", EmployeeController.index);
routes.delete("/employee/:id", EmployeeController.delete);

module.exports = routes;
