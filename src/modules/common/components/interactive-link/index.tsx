import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"
import Image from "next/image"
import next from "/public/icons/next.svg"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center justify-between"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-accent-dark font-medium leading-[22px] px-6">
        {children}
      </Text>
      {/* <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="var(--fg-interactive)"
      /> */}
      <Image src={next} alt="" width={22} height={22} className="mr-6" />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
