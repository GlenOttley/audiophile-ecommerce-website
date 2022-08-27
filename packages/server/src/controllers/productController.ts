import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { IProduct } from '@audiophile/common/interfaces'
import Product from '../models/productModel'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const products: IProduct[] = await Product.find({})
      res.status(200).json(products)
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const product: IProduct | null = await Product.findById(req.params.id)
      res.status(200).json(product)
    } catch (error) {
      res.status(404)
      throw new Error('Something went wrong, please try again')
    }
  }
)

export { getProducts, getProduct }
