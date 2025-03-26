import express, { json } from 'express';

const PORT = process.env.PORT || 3000
const app = express()

app.use(json())


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))