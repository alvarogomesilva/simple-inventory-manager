import { Express } from "express"
import { createUser, loginValidation } from "../validations/user-validation";
import * as userController from '../controllers/user-controller'
import validateRequestBody from "../middlewares/request-body-validator";
import { isAutenticated } from "../middlewares/isAutenticated";

export const usersRoutes = (app: Express) => {
    app.post("/register", validateRequestBody(createUser), userController.registerUser);
    app.post('/login', validateRequestBody(loginValidation), userController.login)
    app.get('/me', isAutenticated, userController.details)
}
