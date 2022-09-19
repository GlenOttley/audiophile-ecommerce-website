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

export interface IProduct {
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

export interface ICartItem {
  _id: string
  quantity: number
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface IUser {
  name: string
  email: string
  phone: string
}

export interface IAddress {
  address: string
  zipCode: string
  city: string
  country: string
}

export interface IPaymentMethod {
  method: 'e-money' | 'cash'
  eMoneyNumber?: string
  eMoneyPin?: string
}

export interface IOrder {
  user: IUser
  items: ICartItem[]
  shippingAddress: IAddress
  paymentMethod: IPaymentMethod
  totalPrice: number
}

// export type { IProduct, IOrder }
