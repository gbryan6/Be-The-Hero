const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.list);

routes.get("/ongs", OngController.list);
routes.post("/ongs", OngController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.list);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
