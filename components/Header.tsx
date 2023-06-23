import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";

import Hamburger from "@/components/navigation/Hamburger";

const Header = () => {
  return (
    <header className={`sticky top-0 font-neue z-20 shadow border border-b-neutral-300 backdrop-blur bg-neutral-200/50`}>
      <div className="max-w-[84rem] mx-auto flex items-center justify-between px-2 py-1 xs:px-3 md:px-6 md:py-2">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <GiBookmark className="xs:text-xl md:text-2xl" />
          <Link href="/" className="font-bold xs:text-xl md:text-2xl">bkstr</Link>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/cart" className="text-xs transition duration-200 hover:text-primary md:text-sm">
            <HiOutlineShoppingBag className="text-xl md:text-2xl" />
          </Link>
          <Hamburger color="bg-neutral-800" />
        </div>
      </div>
    </header>
  );
};

export default Header;