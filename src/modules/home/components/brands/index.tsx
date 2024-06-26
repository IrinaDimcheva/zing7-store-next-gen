"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import asusLogo from "/public/icons/asus-logo.svg"
import miLogo from "/public/icons/mi-logo.svg"
import samsungLogo from "/public/icons/samsung-logo.svg"
import sonyLogo from "/public/icons/sony-logo.svg"
import wacomLogo from "/public/icons/wacom-logo.svg"
import appleLogo from "/public/icons/apple-logo.svg"

const brands = [
  {
    name: "Asus",
    logo: asusLogo,
  },
  {
    name: "Redmi",
    logo: miLogo,
  },
  {
    name: "Samsung",
    logo: samsungLogo,
  },
  {
    name: "Sony",
    logo: sonyLogo,
  },
  {
    name: "Wacom",
    logo: wacomLogo,
  },
  {
    name: "Apple",
    logo: appleLogo,
  },
]

export default function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  }

  return (
    <section className="max-w-screen-fit mx-auto py-8">
      <div className="xl:pl-8">
        <Slider {...settings}>
          {brands.map(({ name, logo }) => (
            <div key={name}>
              <Image src={logo} alt={name} width={120} height={120} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
