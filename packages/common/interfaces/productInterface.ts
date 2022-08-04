interface IImage {
  mobile: string
  tablet: string
  desktop: string
}

interface IItem {
  quantity: number
  item: string
}

interface IGallery {
  first: IImage
  second: IImage
  third: IImage
}

interface IOtherProduct {
  slug: string
  name: string
  image: IImage
}

interface IProduct {
  slug: string
  name: string
  image: IImage
  category: 'earphones' | 'headphones' | 'speakers'
  categoryImage: IImage
  new: boolean
  price: number
  description: string
  features: string
  includes: IItem[]
  gallery: IGallery
  others: IOtherProduct[]
}

export default IProduct
