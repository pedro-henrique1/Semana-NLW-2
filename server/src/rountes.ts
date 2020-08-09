import express from "express";
import ClassesController from "./controllers/classesController";
import ConnectionsController from "./controllers/connnectionController";

const routes = express.Router();
const classesControllles = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesControllles.index);
routes.post("/classes", classesControllles.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
