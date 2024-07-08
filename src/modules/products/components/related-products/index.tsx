import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"

import ProductPreviewRelated from "../product-preview-related"
import { rubik } from "app/fonts"
import { Button } from "@medusajs/ui"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }

  const queryParams = setQueryParams()

  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) =>
    response.products.filter(
      (productPreview) => productPreview.id !== product.id
    )
  )

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex justify-between items-center text-center mb-16">
        <h3 className={`${rubik.className} headline-h4 text-natural-1 mb-6`}>
          Related products
        </h3>
        <Button className="bg-white border-primary-light text-primary-light hover:bg-primary-light hover:text-white py-3 px-6">
          View All
        </Button>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map((productPreview) => (
          <li key={productPreview.id}>
            <ProductPreviewRelated
              region={region}
              productPreview={productPreview}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
