"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGalleryDetails = ({ images }: ImageGalleryProps) => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined)
  const [nav2, setNav2] = useState<Slider | undefined>(undefined)
  let sliderRef1 = useRef<Slider | null>(null)
  let sliderRef2 = useRef<Slider | null>(null)
  let sliderEl1 = sliderRef1.current
  let sliderEl2 = sliderRef2.current

  useEffect(() => {
    if (!sliderEl1 || !sliderEl2) return
    setNav1(sliderEl1)
    setNav2(sliderEl2)
  }, [sliderEl1, sliderEl2])
  return (
    <div className="flex items-start max-w-[600px] relative">
      <div className="flex flex-col flex-1 small:mr-16 gap-y-4">
        <div className="slider-container max-w-[530px]">
          <Slider asNavFor={nav2} ref={(slider) => (sliderEl1 = slider)}>
            {images.map((image, index) => {
              return (
                <Container
                  key={image.id}
                  className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                  id={image.id}
                >
                  <Image
                    src={image.url}
                    priority={index <= 2 ? true : false}
                    className="absolute inset-0 rounded-rounded"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    style={{
                      objectFit: "cover",
                      // objectFit: "contain",
                    }}
                  />
                </Container>
              )
            })}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderEl2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {images.map((image, index) => {
              return (
                <div key={image.id} className="pr-4 pt-4">
                  <Container
                    className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                    id={image.id}
                  >
                    <Image
                      src={image.url}
                      priority={index <= 2 ? true : false}
                      className="absolute inset-0 rounded-rounded"
                      alt={`Product image ${index + 1}`}
                      fill
                      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                      style={{
                        objectFit: "cover",
                        // objectFit: "contain",
                      }}
                    />
                  </Container>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryDetails
