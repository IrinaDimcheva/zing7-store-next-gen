import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
// import { Heading, Text } from "@medusajs/ui"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { rubik } from "app/fonts"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductOverview = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="py-8">
      <div className="flex flex-col gap-y-4 mx-auto">
        <h6 className="font-medium text-[16px] px-8">Descriptions</h6>

        <p
          className="text-[14px] leading-[24px] text-natural-4 max-w-[855px]"
          data-testid="product-description"
        >
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductOverview
