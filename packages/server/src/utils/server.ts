import express, { Application, Request, Response } from 'express'
import path from 'path'
import morgan from 'morgan'
import productRoutes from '../routes/productRoutes'

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

  console.log('App Created!')
  return app
}

export default createServer
