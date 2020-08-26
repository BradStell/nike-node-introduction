import express, { Application } from 'express'
import routes from './routes'
const app: Application = express()

const PORT: number = 8080

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server started on port :${PORT}`)
})
