"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { redirect, useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SvgCartComponent from "@modules/common/icons/svg-cart-component"
import Image from "next/image"
import down from "/public/icons/down.svg"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const countryCode = useParams().countryCode as string

  const variants = product.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  const handleIncrement = () => {
    setQuantity((quantity) => (quantity < 10 ? quantity + 1 : 10))
  }

  const handleDecrement = () => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1))
  }

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div className="flex gap-6 justify-stretch">
          <div className="flex flex-col justify-stretch gap-3">
            <span>Quantity</span>
            <div className="flex h-4 ">
              <input
                type="number"
                min="1"
                max="5"
                step="1"
                value={quantity}
                disabled
                className="text-center px-4 h-10"
              />
              <div className="flex flex-col gap-0 ml-[-24px]">
                <button onClick={handleIncrement}>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={down}
                      alt="+"
                      width={20}
                      height={20}
                      className="rotate-180"
                    />
                  </div>
                </button>
                <button onClick={handleDecrement}>
                  <div className="w-[20px] h-[20px]">
                    <Image src={down} alt="-" width={20} height={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            {product.variants.length > 1 && (
              <div className="flex flex-col gap-y-4">
                {(product.options || []).map((option) => {
                  return (
                    <div key={option.id}>
                      <OptionSelect
                        option={option}
                        current={options[option.id]}
                        updateOption={updateOptions}
                        title={option.title}
                        data-testid="product-options"
                        disabled={!!disabled || isAdding}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
        <div className="my-6">
          <Divider />
        </div>

        <div className="flex justify-between">
          <ProductPrice product={product} variant={variant} region={region} />

          <div className="flex gap-4">
            <div className="flex flex-nowrap w-full">
              <LocalizedClientLink
                href="/cart"
                passHref
                onClick={handleAddToCart}
                className="text-nowrap"
              >
                <Button
                  disabled={!inStock || !variant || !!disabled || isAdding}
                  // variant="primary"
                  // className="w-full h-10"
                  className="w-full h-10 text-[16px] font-medium rounded-md border-[1px] leading-[22px] text-nowrap bg-white border-primary-light text-primary-light hover:bg-primary-light hover:text-white"
                  isLoading={isAdding}
                  data-testid="add-product-button"
                >
                  {!variant
                    ? "Select variant"
                    : !inStock
                    ? "Out of stock"
                    : "Buy Now"}
                </Button>
                <MobileActions
                  product={product}
                  variant={variant}
                  region={region}
                  options={options}
                  updateOptions={updateOptions}
                  inStock={inStock}
                  handleAddToCart={handleAddToCart}
                  isAdding={isAdding}
                  show={!inView}
                  optionsDisabled={!!disabled || isAdding}
                />
              </LocalizedClientLink>
            </div>

            <div className="min-w-[140px] w-full">
              <Button
                onClick={handleAddToCart}
                disabled={!inStock || !variant || !!disabled || isAdding}
                // variant="primary"
                // className="w-full h-10"
                className="w-full h-10 text-[16px] font-medium rounded-md border-[1px] leading-[22px] text-nowrap bg-primary border-primary text-white hover:bg-white  hover:text-primary"
                isLoading={isAdding}
                data-testid="add-product-button"
              >
                {!variant ? (
                  "Select variant"
                ) : !inStock ? (
                  "Out of stock"
                ) : (
                  <>
                    Add to cart
                    <SvgCartComponent />
                  </>
                )}
              </Button>
              <MobileActions
                product={product}
                variant={variant}
                region={region}
                options={options}
                updateOptions={updateOptions}
                inStock={inStock}
                handleAddToCart={handleAddToCart}
                isAdding={isAdding}
                show={!inView}
                optionsDisabled={!!disabled || isAdding}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
