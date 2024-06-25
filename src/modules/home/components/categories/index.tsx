import { Button } from "@medusajs/ui"
import Image from "next/image"
import phone from "/public/icons/phone.svg"
import camera from "/public/icons/camera.svg"
import monitor from "/public/icons/monitor.svg"
import safe from "/public/icons/safe.svg"
import game from "/public/icons/game.svg"
import globe from "/public/icons/globe.svg"

const categories = [
  {
    id: 1,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: phone,
  },
  {
    id: 2,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: camera,
  },
  {
    id: 3,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: monitor,
  },
  {
    id: 4,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: safe,
  },
  {
    id: 5,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: game,
  },
  {
    id: 6,
    name: "Category Name",
    description: "2,3k items",
    iconUrl: globe,
  },
]

export default function Categories() {
  return (
    <section className="max-w-screen-fit mx-auto py-12 px-5 xl:px-0">
      <div className="flex justify-between items-center">
        <h3 className="headline-h3">Category</h3>
        <div className="w-[120px]">
          <Button className="bg-white border-primary-light text-primary-light hover:bg-primary-light hover:text-white py-3 px-6">
            View All
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((item) => (
          <li key={item.id} className="flex flex-col gap-8 items-center py-12">
            <div>
              <Image src={item.iconUrl} alt="" width={56} height={56} />
            </div>
            <div className="flex flex-col items-center text-sm">
              <h6 className="font-medium text-natural-1">{item.name}</h6>
              <p className="text-natural-7">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
