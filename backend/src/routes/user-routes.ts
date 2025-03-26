import { Express } from "express"
import { createUser } from "../validations/user-validation";
import * as userController from '../controllers/user-controller'
import validateRequestBody from "../middlewares/request-body-validator";

export const usersRoutes = (app: Express) => {
    app.post("/register", validateRequestBody(createUser), userController.registerUser);

}
