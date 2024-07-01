import { Metadata } from "next"
import "styles/globals.css"
import { roboto } from "./fonts"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body
        className={`${roboto.className} antialiased text-[16px] leading-[20px]`}
      >
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
