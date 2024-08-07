import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

// import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import ImageGalleryDetails from "../components/image-gallery-details"
import ProductOverview from "./product-overview"
import Divider from "@modules/common/components/divider"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container-fit flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="block w-full relative">
          <ImageGalleryDetails images={product?.images || []} />
        </div>
        <div className="flex gap-y-8 flex-col small:sticky small:top-48 small:py-0 small:max-w-[572px] w-full py-8">
          <div className=" gap-y-6">
            <ProductInfo product={product} />
          </div>
          <Divider />
          <div className="gap-y-12">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="content-container-fit">
        <ProductOverview product={product} />
        <ProductTabs product={product} />
      </div>
      <div
        className="content-container-fit my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
