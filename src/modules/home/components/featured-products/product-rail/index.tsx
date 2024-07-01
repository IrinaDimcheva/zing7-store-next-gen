import { Region } from "@medusajs/medusa"
// import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreviewHome from "@modules/products/components/product-preview-home"
import { rubik } from "app/fonts"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 !text-[16px]">
      <h4 className={`${rubik.className} headline-h4 text-natural-1`}>
        {collection.title}
      </h4>
      <ul className="flex flex-col gap-y-5 gap-x-12 px-5">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreviewHome
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
      <InteractiveLink href={`/collections/${collection.handle}`}>
        View More Products…
      </InteractiveLink>
    </div>
  )
}
