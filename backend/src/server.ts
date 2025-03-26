import express, { json } from 'express';
import { usersRoutes } from './routes/user-routes';
import cors from 'cors';

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(json())

usersRoutes(app)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))