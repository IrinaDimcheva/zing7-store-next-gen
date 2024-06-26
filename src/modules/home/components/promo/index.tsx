import { Button } from "@medusajs/ui"
import Image from "next/image"
import Divider from "@modules/common/components/divider"
import lenovo from "/public/images/lenovo.svg"
import { rubik } from "app/fonts"

export default function Promo() {
  return (
    <>
      <section className="max-w-screen-fit mx-auto overflow-x-hidden">
        <div className="!bg-accent/15 px-5 py-12 lg:py-2 rounded-lg flex flex-wrap gap-8 items-center justify-around">
          <div>
            <Image
              src={lenovo}
              alt="Lenovo Yoga X"
              width={350}
              height={340}
              className="mb-[-20px]"
            />
          </div>
          <div className="flex flex-col gap-6 w-[377px]">
            <p className="text-accent text-sm font-medium">FLASH SALE 7.7.7</p>
            <h2 className={`${rubik.className} headline-h2 text-natural-1`}>
              Lenovo Yoga X
            </h2>
            <p className="text-natural-7 leading-[26px]">
              Smarter and intuitive with the same expert design and detail. Plus
              combine innovative latest AI features
            </p>
            <div className="flex items-center gap-8 w-5/6">
              <Button className="bg-accent border-[1px] !border-accent !text-white hover:bg-white hover:!text-accent px-8 py-2 text-nowrap">
                Buy Now for $750
              </Button>
              <span className="line-through text-natural-7 text-[20px] leading-[28px]">
                $1500,00
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-fit mx-auto">
        <Divider />
      </div>
    </>
  )
}
