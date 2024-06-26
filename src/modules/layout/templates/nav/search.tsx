import Image from "next/image"
import upDown from "/public/icons/up-down.svg"
import search from "/public/icons/search.svg"

export default function Search() {
  return (
    <div className="flex max-w-[453px] w-full bg-natural-10 rounded-md ">
      <input
        type="text"
        placeholder="Search something..."
        className="bg-natural-10 w-full px-4 outline-none rounded-l-md"
      />
      <div className="flex gap-4 justify-between items-center pl-4 pr-8 border-l-[1px] border-l-natural-9">
        <div className="text-natural-1 w-[100px] text-nowrap">
          All Categories
        </div>
        <Image src={upDown} alt="" width={22} height={22} />
      </div>
      <button>
        <div className="w-[44px]">
          <Image src={search} alt="Search" width={44} height={44} />
        </div>
      </button>
    </div>
  )
}
