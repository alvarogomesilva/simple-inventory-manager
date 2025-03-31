import { Express } from "express";
import * as categoryController from '../controllers/category-controller';
import { isAutenticated } from "../middlewares/isAutenticated";

export const categoriesRoutes = (app: Express) => {
    app.post('/categories', isAutenticated, categoryController.registerCategory)
}