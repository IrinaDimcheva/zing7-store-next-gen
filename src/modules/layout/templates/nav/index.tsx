import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { rubik } from "app/fonts"
import Divider from "@modules/common/components/divider"
import facebook from "/public/icons/facebook.svg"
import twitter from "/public/icons/twitter.svg"
import youtube from "/public/icons/youtube.svg"
import instagram from "/public/icons/instagram.svg"
import down from "/public/icons/down.svg"
import account from "/public/icons/account.svg"
import cart from "/public/icons/cart.svg"
import heart from "/public/icons/heart.svg"
import Image from "next/image"
import Search from "./search"

const socialLinks = [
  {
    name: "Facebook",
    href: "/",
    iconUrl: facebook,
  },
  {
    name: "Twitter",
    href: "/",
    iconUrl: twitter,
  },
  {
    name: "YouTube",
    href: "/",
    iconUrl: youtube,
  },
  {
    name: "Instagram",
    href: "/",
    iconUrl: instagram,
  },
]

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="max-lg:hidden relative h-28 mx-auto border-b duration-200 bg-white border-ui-border-base text-natural-5">
        <nav className="max-w-screen-fit mx-auto text-ui-fg-subtle flex items-center justify-between w-full h-12">
          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <LocalizedClientLink href={link.href}>
                  <Image
                    src={link.iconUrl}
                    alt={link.name}
                    width={20}
                    height={20}
                  />
                </LocalizedClientLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-6 h-full justify-end">
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
            <LocalizedClientLink href="/">Help</LocalizedClientLink>
          </div>
        </nav>
        <div className="w-[1440px] mx-auto">
          <Divider />
        </div>
        <nav className="max-w-screen-fit mx-auto text-ui-fg-subtle flex items-center justify-between w-full h-16">
          <div className="flex items-center justify-between h-full w-full">
            <LocalizedClientLink
              href="/"
              className={`${rubik.className} headline-h3 hover:text-ui-fg-base uppercase`}
              data-testid="nav-store-link"
            >
              Store
            </LocalizedClientLink>
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {!process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  {/* Search */}
                  <Search />
                </LocalizedClientLink>
              )}
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 justify-end">
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base relative"
                      href="/cart"
                      data-testid="nav-cart-link"
                    >
                      <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9">
                        <Image src={cart} alt="cart" width={24} height={24} />
                      </div>
                      <div className="bg-accent-red w-[18px] h-[18px] py-[1px] rounded-full text-center text-xs text-white right-[-2px] top-[4px] absolute">
                        0
                      </div>
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/"
                  data-testid="nav-account-link"
                >
                  <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9">
                    <Image src={heart} alt="favorites" width={24} height={24} />
                  </div>
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9">
                    <Image src={account} alt="account" width={24} height={24} />
                  </div>
                </LocalizedClientLink>
              </div>
              <LocalizedClientLink
                href="/account"
                className={`${rubik.className}`}
              >
                <p className="text-natural-5">Ivan Todorov</p>
                <div className="flex gap-4">
                  <p className="text-natural-1">My Account</p>
                  <Image src={down} alt="" width={20} height={20} />
                </div>
              </LocalizedClientLink>
            </div>
          </div>
        </nav>
      </header>
      <header className="relative lg:hidden max-w-screen-wide h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-16 text-small-regular">
          {/* <div className="flex items-center gap-x-6 h-full justify-end">
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
          </div> */}
          <div className="flex items-center justify-between h-full w-full">
            <LocalizedClientLink
              href="/"
              className={`${rubik.className} headline-h3 hover:text-ui-fg-base uppercase`}
              data-testid="nav-store-link"
            >
              Store
            </LocalizedClientLink>
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {!process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  {/* Search */}
                  <Search />
                </LocalizedClientLink>
              )}
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 justify-end">
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base relative"
                      href="/cart"
                      data-testid="nav-cart-link"
                    >
                      <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full border-[1px] border-natural-9">
                        <Image src={cart} alt="cart" width={24} height={24} />
                      </div>
                      <div className="bg-accent-red w-[18px] h-[18px] py-[1px] rounded-full text-center text-xs text-white right-[-2px] top-[4px] absolute">
                        0
                      </div>
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/"
                  data-testid="nav-account-link"
                >
                  <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full border-[1px] border-natural-9">
                    <Image src={heart} alt="favorites" width={24} height={24} />
                  </div>
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full border-[1px] border-natural-9">
                    <Image src={account} alt="account" width={24} height={24} />
                  </div>
                </LocalizedClientLink>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6 h-full justify-end">
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

    // <div className="sticky top-0 inset-x-0 z-50 group">
    //   <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
    //     <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
    //       <div className="flex-1 basis-0 h-full flex items-center">
    //         <div className="h-full">
    //           <SideMenu regions={regions} />
    //         </div>
    //       </div>

    //       <div className="flex items-center h-full">
    //         <LocalizedClientLink
    //           href="/"
    //           className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
    //           data-testid="nav-store-link"
    //         >
    //           Store
    //         </LocalizedClientLink>
    //       </div>

    //       <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
    //         <div className="hidden small:flex items-center gap-x-6 h-full">
    //           {process.env.FEATURE_SEARCH_ENABLED && (
    //             <LocalizedClientLink
    //               className="hover:text-ui-fg-base"
    //               href="/search"
    //               scroll={false}
    //               data-testid="nav-search-link"
    //             >
    //               Search
    //             </LocalizedClientLink>
    //           )}
    //           <LocalizedClientLink
    //             className="hover:text-ui-fg-base"
    //             href="/account"
    //             data-testid="nav-account-link"
    //           >
    //             Account
    //           </LocalizedClientLink>
    //         </div>
    //         <Suspense
    //           fallback={
    //             <LocalizedClientLink
    //               className="hover:text-ui-fg-base flex gap-2"
    //               href="/cart"
    //               data-testid="nav-cart-link"
    //             >
    //               Cart (0)
    //             </LocalizedClientLink>
    //           }
    //         >
    //           <CartButton />
    //         </Suspense>
    //       </div>
    //     </nav>
    //   </header>
    // </div>
  )
}
