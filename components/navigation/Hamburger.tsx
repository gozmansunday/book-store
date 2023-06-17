"use client";

import { useMenuStore } from "@/hooks/useStore";

interface Props {
  color: string;
}

const Hamburger = ({ color }: Props) => {
  const [menuOpen, toggleMenu] = useMenuStore((state) => [state.menuOpen, state.toggleMenu]);

  return (
    <div
      onClick={toggleMenu}
      className="flex justify-center items-center flex-col gap-1 hover:cursor-pointer pb-1"
    >
      <div className={`${color} h-[2px] w-10 ${menuOpen && "rotate-[30deg] origin-[36%_50%] md:origin-[36%_50%]"} md:w-12 transition-transform duration-200 ease-out`}></div>
      <div className={`${color} h-[2px] w-10 ${menuOpen && "-rotate-[30deg] origin-[36%_50%] md:origin-[36%_50%]"} md:w-12 transition-transform duration-200 ease-out`}></div>
    </div>
  );
};

export default Hamburger;