import createServer from './utils/server'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './utils/db'

// const serverRoot = path.resolve()

// dev
dotenv.config({ path: path.join(path.resolve(), '../../.env') })

// build
// dotenv.config({ path: path.resolve() + '/.env' })

console.log(path.resolve())

export const app = createServer()

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  connectDB()
})
