import { rubik } from "app/fonts"
import Image from "next/image"
import track from "/public/icons/track.svg"
import money from "/public/icons/money.svg"
import headphones from "/public/icons/headphones.svg"
import card from "/public/icons/card.svg"

const benefits = [
  {
    title: "Free Shipping",
    description: "Free delivery for all orders",
    iconUrl: track,
  },
  {
    title: "Money Guarantee",
    description: "30 days money back",
    iconUrl: money,
  },
  {
    title: "24/7 Support",
    description: "Friendly 24/7 support",
    iconUrl: headphones,
  },
  {
    title: "Secure Payment",
    description: "All cards accepted",
    iconUrl: card,
  },
]

export default function Benefits() {
  return (
    <section className="max-w-screen-fit mx-auto py-20 px-5 lg:px-0">
      <ul className="flex flex-wrap justify-between gap-12">
        {benefits.map((item) => (
          <li
            key={item.title}
            className="flex justify-center items-center gap-4"
          >
            <div>
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h5 className={`${rubik.className} headline-h5`}>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
