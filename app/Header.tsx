import Link from "next/link";
import { BsCartFill } from "react-icons/bs";

import Container from "@/components/Container";

const Header = () => {
  return (
    <header className="font-clash py-1">
      <Container>
        <div className="flex justify-between items-center">
          <section className="font-semibold text-4xl text-mai">
            bkstr
          </section>

          <section className="space-x-6 text-lg">
            <Link className="hover:text-main" href="/crime">Crime</Link>
            <Link className="hover:text-main" href="/fantasy">Fantasy</Link>
            <Link className="hover:text-main" href="/romance">Romance</Link>
            <Link className="hover:text-main" href="/sci-fi">Sci-Fi</Link>
            <Link className="hover:text-main" href="/horror">Horror</Link>
          </section>

          <section>
            <BsCartFill className="cursor-pointer hover:fill-main text-lg" />
          </section>
        </div>
      </Container>
    </header>
  );
};

export default Header;