import { rubik } from "app/fonts"
import Image from "next/image"

type BlogItem = {
  id: number
  date: string
  title: string
  description: string
  imageUrl: string
}
export default function BlogItem({
  date,
  title,
  description,
  imageUrl,
}: BlogItem) {
  return (
    <li className="flex flex-col gap-4 ">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={350}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 text-[14px] leading-[20px] max-w-[350px]">
        <p className="text-primary-light">{date}</p>
        <h5 className={`${rubik.className} headline-h5 text-natural-1`}>
          {title}
        </h5>
        <p className="text-natural-7">{description}</p>
      </div>
    </li>
  )
}
