import Image from "next/image"
import star from "/public/icons/star.svg"

export default function Rating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Image key={i} src={star} alt="star" width={16} height={16} />
      ))}
    </div>
  )
}
