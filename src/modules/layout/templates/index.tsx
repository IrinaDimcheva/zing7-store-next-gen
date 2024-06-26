import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { roboto } from "app/fonts"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div
      className={`${roboto.className} antialiased text-[16px] leading-[20px]`}
    >
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
