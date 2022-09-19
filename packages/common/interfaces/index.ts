export interface IItem {
  quantity: number
  item: string
}

export interface IImage {
  mobile: string
  tablet: string
  desktop: string
  alt: string
}

export interface IGallery {
  first: IImage
  second: IImage
  third: IImage
}

interface IAddress {
  address: string
  zipCode: string
  city: string
  country: string
}

interface IProduct {
  _id: string
  slug: string
  name: string
  shortName: string
  image: IImage
  category: 'earphones' | 'headphones' | 'speakers'
  categoryImage: IImage
  new: boolean
  price: number
  description: string
  features: string
  includes: IItem[]
  gallery: IGallery
  others: IProduct[]
}

interface IOrder {
  items: {
    quantity: number
    product: IProduct
  }
  shippingAddress: IAddress
  paymentMethod: {
    method: 'e-money' | 'cash'
    eMoneyNumber?: string
    eMoneyPin?: string
  }
  totalPrice: number
}

export type { IProduct, IOrder }
