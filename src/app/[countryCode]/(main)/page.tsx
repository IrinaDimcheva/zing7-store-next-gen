import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Benefits from "@modules/home/components/benefits"
import BestProducts from "@modules/home/components/best-products"
import Promo from "@modules/home/components/promo"
import Categories from "@modules/home/components/categories"
import Products from "@modules/home/components/products"
import Blog from "@modules/home/components/blog"
import Brands from "@modules/home/components/brands"
import Divider from "@modules/common/components/divider"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Benefits />
      <BestProducts />
      <Promo />
      <Categories />
      {/* <Products /> */}
      <>
        <section className="max-w-screen-fit mx-auto overflow-x-hidden py-20 px-5 xl:px-0">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </section>
        <div className="max-w-screen-fit mx-auto py-4">
          <Divider />
        </div>
      </>
      <Blog />
      <Brands />
    </div>
  )
}
