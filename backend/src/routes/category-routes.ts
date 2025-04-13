import { Express } from "express";
import * as categoryController from '../controllers/category-controller';
import { isAutenticated } from "../middlewares/isAutenticated";
import validateRequestBody from "../middlewares/request-body-validator";
import { createCategory } from "../validations/category-validation";

export const categoriesRoutes = (app: Express) => {
    app.post('/categories', isAutenticated, validateRequestBody(createCategory), categoryController.registerCategory)

    app.get('/categories', isAutenticated, categoryController.listAllCategories)
    app.delete('/categories/:id', isAutenticated, categoryController.deleteCategory)
}