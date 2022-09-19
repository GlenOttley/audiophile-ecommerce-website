import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import Product, { ISavedProductDocument } from '../models/productModel'
import Order from '../models/orderModel'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { items, shippingAddress, paymentMethod, totalPrice } = req.body

  if (items && items.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      items,
      shippingAddress,
      paymentMethod,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const product: ISavedProductDocument | null = await Product.findById(
        req.params.id
      ).populate('others')
      res.status(200).json(product)
    } catch (error) {
      res.status(404)
      throw new Error('Something went wrong, please try again')
    }
  }
)

// for each product in db, add three random product id's from db to 'others' field
const assignOthers = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const products: ISavedProductDocument[] = await Product.find({})

      products.forEach((product) => {
        for (let i = 0; i < 3; i++) {
          let itemIndex = Math.floor(Math.random() * products.length)
          product.others.push(products[itemIndex]._id)
        }
      })
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

export { createOrder }
