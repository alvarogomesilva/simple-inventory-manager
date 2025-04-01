import express, { json } from 'express';
import { usersRoutes } from './routes/user-routes';
import cors from 'cors';
import { categoriesRoutes } from './routes/category-routes';
import { supplierRoutes } from './routes/supplier-routes';

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(json())

usersRoutes(app)
categoriesRoutes(app)
supplierRoutes(app)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))