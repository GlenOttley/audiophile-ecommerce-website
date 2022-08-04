import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import path from 'path'
import connectDB from './utils/db'

dotenv.config({ path: path.resolve() + '/.env' })

const app: Application = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB()

const __dirnameAlias = path.resolve()

// middleware
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirnameAlias, 'packages/client/build')))
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirnameAlias, 'packages', 'client', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req: Request, res: Response) => {
    res.json('API is running...')
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
