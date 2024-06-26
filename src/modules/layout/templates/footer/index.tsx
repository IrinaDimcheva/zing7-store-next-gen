import { Text, clx } from "@medusajs/ui"

// import { getCategoriesList, getCollectionsList } from "@lib/data"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import Image from "next/image"
import facebook from "/public/icons/facebook.svg"
import twitter from "/public/icons/twitter.svg"
import youtube from "/public/icons/youtube.svg"
import instagram from "/public/icons/instagram.svg"
import github from "/public/icons/github.svg"

export default async function Footer() {
  // const { collections } = await getCollectionsList(0, 6)
  // const { product_categories } = await getCategoriesList(0, 6)

  const socialLinksFooter = [
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
    {
      name: "GitHub",
      href: "/",
      iconUrl: github,
    },
  ]

  return (
    <footer className="bg-natural-9">
      <div className="max-w-screen-fit mx-auto p-5 xl:px-0">
        <div className="flex flex-wrap gap-8 justify-between">
          <Text className="text-natural-4 text-sm">
            Store © Copyright {new Date().getFullYear()}, Inc. All rights
            reserved
          </Text>
          <ul className="flex gap-4">
            {socialLinksFooter.map((l) => (
              <li key={l.name}>
                <Link href={l.href}>
                  <Image src={l.iconUrl} alt={l.name} width={22} height={22} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

    // <footer className="border-t border-ui-border-base w-full">
    //   {/* <div className="content-container flex flex-col w-full">
    //     <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
    //       <div>
    //         <LocalizedClientLink
    //           href="/"
    //           className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
    //         >
    //           Store
    //         </LocalizedClientLink>
    //       </div>
    //       <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
    //         {product_categories && product_categories?.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Categories
    //             </span>
    //             <ul
    //               className="grid grid-cols-1 gap-2"
    //               data-testid="footer-categories"
    //             >
    //               {product_categories?.slice(0, 6).map((c) => {
    //                 if (c.parent_category) {
    //                   return
    //                 }

    //                 const children =
    //                   c.category_children?.map((child) => ({
    //                     name: child.name,
    //                     handle: child.handle,
    //                     id: child.id,
    //                   })) || null

    //                 return (
    //                   <li
    //                     className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
    //                     key={c.id}
    //                   >
    //                     <LocalizedClientLink
    //                       className={clx(
    //                         "hover:text-ui-fg-base",
    //                         children && "txt-small-plus"
    //                       )}
    //                       href={`/categories/${c.handle}`}
    //                       data-testid="category-link"
    //                     >
    //                       {c.name}
    //                     </LocalizedClientLink>
    //                     {children && (
    //                       <ul className="grid grid-cols-1 ml-3 gap-2">
    //                         {children &&
    //                           children.map((child) => (
    //                             <li key={child.id}>
    //                               <LocalizedClientLink
    //                                 className="hover:text-ui-fg-base"
    //                                 href={`/categories/${child.handle}`}
    //                                 data-testid="category-link"
    //                               >
    //                                 {child.name}
    //                               </LocalizedClientLink>
    //                             </li>
    //                           ))}
    //                       </ul>
    //                     )}
    //                   </li>
    //                 )
    //               })}
    //             </ul>
    //           </div>
    //         )}
    //         {collections && collections.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Collections
    //             </span>
    //             <ul
    //               className={clx(
    //                 "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
    //                 {
    //                   "grid-cols-2": (collections?.length || 0) > 3,
    //                 }
    //               )}
    //             >
    //               {collections?.slice(0, 6).map((c) => (
    //                 <li key={c.id}>
    //                   <LocalizedClientLink
    //                     className="hover:text-ui-fg-base"
    //                     href={`/collections/${c.handle}`}
    //                   >
    //                     {c.title}
    //                   </LocalizedClientLink>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}
    //         <div className="flex flex-col gap-y-2">
    //           <span className="txt-small-plus txt-ui-fg-base">Links</span>
    //           <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small"></ul>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
    //       <Text className="text-natural-4 text-sm">
    //         Store © Copyright {new Date().getFullYear()}, Inc. All rights
    //         reserved
    //       </Text>
    //       <MedusaCTA />
    //     </div>

    //   {/* </div> */}
    // </footer>
  )
}
