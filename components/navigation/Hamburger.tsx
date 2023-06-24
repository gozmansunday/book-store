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
      className="flex justify-center items-center flex-col gap-1 hover:cursor-pointer"
    >
      <div className={`${color} h-[3px] w-8 ${menuOpen && "rotate-[30deg] origin-[20%_50%]"} md:w-10 transition-transform duration-200 ease-out`}></div>
      <div className={`${color} h-[3px] w-8 ${menuOpen && "-rotate-[30deg] origin-[20%_50%]"} md:w-10 transition-transform duration-200 ease-out`}></div>
    </div>
  );
};

export default Hamburger;