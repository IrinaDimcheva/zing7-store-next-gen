import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection) => (
    <li key={collection.id} className="flex flex-col gap-12">
      <ProductRail collection={collection} region={region} />
    </li>
  ))
}
