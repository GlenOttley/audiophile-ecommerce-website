import { IProduct } from '@audiophile/common/interfaces'
import Product from '../models/productModel'

export async function createProduct(product: IProduct) {
  return Product.create(product)
}
