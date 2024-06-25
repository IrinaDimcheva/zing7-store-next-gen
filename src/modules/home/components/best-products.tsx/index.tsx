import Divider from "@modules/common/components/divider"
import ProductCard from "./product-card"
import samsungWatch from "/public/images/samsung-galaxy-watch.webp"
import appleWatch from "/public/images/apple-watch.webp"
import iphone from "/public/images/iphone.jpg"
import beatsByDre from "/public/images/beats-by-dre.jpg"
import garminWatch from "/public/images/garmin-watch.webp"
import yellowTurtleneck from "/public/images/yellow-turtleneck.svg"
import speaker from "/public/images/speaker.jpg"
import airpods from "/public/images/airpods.svg"

const bestProducts = [
  {
    id: 1,
    onSale: true,
    inFavorites: true,
    department: "Men Fashion",
    name: "Samsung Galaxy Watch 3",
    price: "$1,725.00",
    rating: 5,
    imageUrl: samsungWatch,
  },
  {
    id: 2,
    onSale: false,
    inFavorites: false,
    department: "Men Fashion",
    name: "Apple Watch 4 2020",
    price: "$1,725.00",
    rating: 5,
    imageUrl: appleWatch,
  },
  {
    id: 3,
    onSale: true,
    inFavorites: false,
    department: "Men Fashion",
    name: "iPhone XS Max Pro",
    price: "$1,725.00",
    rating: 5,
    imageUrl: iphone,
  },
  {
    id: 4,
    onSale: false,
    inFavorites: false,
    department: "Men Fashion",
    name: "Beats by Dre C 3450",
    price: "$1,725.00",
    rating: 5,
    imageUrl: beatsByDre,
  },
  {
    id: 5,
    onSale: false,
    inFavorites: false,
    department: "Men Fashion",
    name: "Airpods 2nd Gen",
    price: "$1,725.00",
    rating: 5,
    imageUrl: airpods,
  },
  {
    id: 6,
    onSale: true,
    inFavorites: false,
    department: "Men Fashion",
    name: "Garmin Watch Fit X",
    price: "$1,725.00",
    rating: 5,
    imageUrl: garminWatch,
  },
  {
    id: 7,
    onSale: false,
    inFavorites: false,
    department: "Men Fashion",
    name: "Women Yellow Turtleneck",
    price: "$1,725.00",
    rating: 5,
    imageUrl: yellowTurtleneck,
  },
  {
    id: 8,
    onSale: true,
    inFavorites: false,
    department: "Men Fashion",
    name: "Harman Kardon Speaker",
    price: "$1,725.00",
    rating: 5,
    imageUrl: speaker,
  },
]

export default function BestProducts() {
  return (
    <section className="max-w-screen-fit mx-auto px-5 lg:px-0">
      <Divider />
      <div className="mt-24 mb-[100px] md:mb-[32]">
        <div className="text-center pb-16">
          <h2 className="headline-h2 text-natural-1">Best Seller Products</h2>
          <p className="text-natural-7 leading-[22px]">
            Check our best seller products on Elma website right now
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
