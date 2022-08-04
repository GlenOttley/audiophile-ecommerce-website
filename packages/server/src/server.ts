import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './utils/db'

dotenv.config({ path: path.resolve() + '/.env' })

const app: Application = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB()

// middleware
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
