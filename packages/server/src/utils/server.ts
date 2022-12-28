const morgan = require('morgan')
import express, { Application, Request, Response } from 'express'
import path from 'path'
import productRoutes from '../routes/productRoutes'
import orderRoutes from '../routes/orderRoutes'

function createServer() {
  const serverRoot = path.resolve()

  const app: Application = express()

  // middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  app.use(express.json())

  // routes
  app.use('/api/products', productRoutes)
  app.use('/api/orders', orderRoutes)

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(serverRoot, 'packages/client/build')))
    app.get('*', (req: Request, res: Response) =>
      res.sendFile(
        path.resolve(serverRoot, 'packages', 'client', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req: Request, res: Response) => {
      res.json('API is running...')
    })
  }
  return app
}

export default createServer
