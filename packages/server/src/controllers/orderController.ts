import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import Order, { ISavedOrderDocument } from '../models/orderModel'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { items } = req.body

  if (items && items.length === 0) {
    res.status(400).json({ message: 'No order items' })
  } else {
    const order: ISavedOrderDocument = new Order(req.body)

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

export { createOrder }
