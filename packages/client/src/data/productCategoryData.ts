export interface IProductCategory {
  name: string
  slug: string
  image: string
}

const productCategoryData: IProductCategory[] = [
  {
    name: 'Headphones',
    slug: '/headphones',
    image: './assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    name: 'Speakers',
    slug: '/speakers',
    image: './assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    name: 'Earphones',
    slug: '/earphones',
    image: './assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
]

export default productCategoryData
