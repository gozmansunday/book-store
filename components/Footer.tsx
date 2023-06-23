import { BsEnvelopeFill, BsGithub, BsTwitter } from "react-icons/bs";
import { format } from 'date-fns';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 font-clash -z-20">
      <div className="max-w-[80rem] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between border border-neutral-100 border-t-neutral-300 py-2 md:py-4">
          {/* Copyright */}
          <p>
            &#169; {format(new Date(), 'y')} Gozman.
          </p>

          <ul className="flex justify-center items-center gap-3 fill-neutral-900 sm:gap-4">
            <li>
              <a href="https://github.com/stGozman" target="_blank" rel="noopener noreferrer"><BsGithub className="hover:fill-primary text-lg md:text-xl" /></a>
            </li>
            <li>
              <a href="https://twitter.com/stGozman" target="_blank" rel="noopener noreferrer"><BsTwitter className="hover:fill-primary text-lg md:text-xl" /></a>
            </li>
            <li>
              <a href="mailto:thegzmn@gmail.com" target="_blank" rel="noopener noreferrer"><BsEnvelopeFill className="hover:fill-primary text-lg md:text-xl" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;