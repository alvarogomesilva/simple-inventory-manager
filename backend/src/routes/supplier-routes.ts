import { Express } from "express"
import { isAutenticated } from "../middlewares/isAutenticated"
import * as supplierController from '../controllers/supplier-controller'
import { createSupplier } from "../validations/supplier-validation"
import validateRequestBody from "../middlewares/request-body-validator"

export const supplierRoutes = (app: Express) => {
    app.post('/suppliers', isAutenticated, validateRequestBody(createSupplier), supplierController.registerSupplier)
}