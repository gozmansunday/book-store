import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className={`flex flex-col font-neue bg-white`}>
      <div className="container mx-auto px-1 py-2 flex items-center justify-between md:py-3">
        {/* Logo */}
        <Link href="/" className="font-semibold text-xl sm:text-2xl md:text-3xl">bkstr</Link>

        <div className="flex items-center gap-6 font-semibold md:gap-8">
          <Link href="/cart" className="text-xs transition duration-200 hover:text-main-dark md:text-sm">CART</Link>
          <Hamburger color="bg-neutral-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;