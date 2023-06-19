import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

import { categoriesData } from "@/public/assets/data/data";
import Marquee from "../marquee/Marquee";

const Categories = () => {
  return (
    <section>
      <Marquee content="categories" />

      <div className="max-w-[96rem] mx-auto px-2 divide-y-2 divide-neutral-900">

        {categoriesData.map((category) => (
          <div key={category.name} className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
            <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">{category.name}</h3>

            <section className="font-clash grid justify-between gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className={`h-36 sm:h-48 shadow-md bg-[url(/assets/images/${category.image})] bg-bottom bg-cover md:bg-cover md:h-full`}></div>

              <div className="flex flex-col gap-4 md:gap-8">
                <p className="text-sm sm:text-base md:text-md lg:text-lg">
                  {category.content}
                </p>

                <Link href={category.pageLink} className="flex">
                  <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12'>
                    View Category <BsChevronRight className='text-sm' />
                  </button>
                </Link>
              </div>
            </section>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Categories;

// -------------------------------------------------
// IGNORE
{/* bg-[url(/assets/images/fiction.jpg)] */}
{/* bg-[url(/assets/images/non-fiction.jpg)] */}