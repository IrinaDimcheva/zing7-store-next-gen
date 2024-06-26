import Divider from "@modules/common/components/divider"
import Image from "next/image"
import Link from "next/link"
import iphone from "/public/images/iphone.jpg"
import shoe from "/public/images/shoe.png"
import yellowTurtleneck from "/public/images/yellow-turtleneck.svg"
import star from "/public/icons/star.svg"
import next from "/public/icons/next.svg"

const products = [
  {
    id: 1,
    category: "Product list 1",
    items: [
      {
        id: 11,
        name: "Popular items from cat 01",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: iphone,
      },
      {
        id: 12,
        name: "Popular items from cat 01",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: iphone,
      },
      {
        id: 13,
        name: "Popular items from cat 01",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: iphone,
      },
    ],
  },
  {
    id: 2,
    category: "Product list 2",
    items: [
      {
        id: 21,
        name: "Popular items from cat 02",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: shoe,
      },
      {
        id: 22,
        name: "Popular items from cat 02",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: shoe,
      },
      {
        id: 23,
        name: "Popular items from cat 02",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: shoe,
      },
    ],
  },
  {
    id: 3,
    category: "Product list 3",
    items: [
      {
        id: 31,
        name: "Popular items from cat 03",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: yellowTurtleneck,
      },
      {
        id: 32,
        name: "Popular items from cat 03",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: yellowTurtleneck,
      },
      {
        id: 33,
        name: "Popular items from cat 03",
        price: "$1,725.00",
        rating: "4,6",
        imageUrl: yellowTurtleneck,
      },
    ],
  },
]

export default function Products() {
  return (
    <>
      <section className="max-w-screen-fit mx-auto overflow-x-hidden py-20 px-5 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {products.map((p) => (
            <ul key={p.id} className="flex flex-col gap-8 ">
              <h4 className="headline-h4 text-natural-1">{p.category}</h4>
              <ul className="flex flex-col gap-y-5 gap-x-12 px-5">
                {p.items.map((i) => (
                  <li key={i.id} className="flex items-center gap-5 h-[104px]">
                    <div className="overflow-hidden">
                      <Image
                        src={i.imageUrl}
                        alt=""
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h6>{i.name}</h6>
                      <div className="flex gap-8 items-center">
                        <div className="text-primary-light">{i.price}</div>
                        <div className="flex gap-2">
                          <Image src={star} alt="star" width={16} height={16} />
                          <span className="text-natural-7">{i.rating}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/" className="flex justify-between items-center">
                <span className="text-accent-dark font-medium leading-[22px] px-6">
                  View More Products…
                </span>
                <span>
                  <Image src={next} alt="" width={22} height={22} />
                </span>
              </Link>
            </ul>
          ))}
        </div>
      </section>
      <div className="max-w-screen-fit mx-auto py-4">
        <Divider />
      </div>
    </>
  )
}
