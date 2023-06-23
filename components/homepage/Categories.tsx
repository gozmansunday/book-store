import Link from "next/link";
import Image from "next/image";

import { categoriesData } from "@/public/data/data";

const Categories = () => {
  return (
    <section className="py-6">
      <div className="max-w-[84rem] space-y-8 mx-auto px-2 xs:px-3 md:px-6 lg:px-3">
        <h2 className="font-ade uppercase text-xl md:text-3xl">
          categories
        </h2>

        <div className="bg-neutral-200/50 border border-neutral-300 divide-y-2 divide-neutral-300 backdrop-blur px-8 rounded-2xl shadow md:px-12">

          {categoriesData.map((category) => (
            <div key={category.name} className="space-y-6 pt-6 pb-8 md:pt-8 md:pb-12">
              <h3 className="text-base text-neutral-600 capitalize md:text-lg lg:text-xl">{category.name}</h3>

              <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12 lg:grid-cols-[4fr_5fr]">
                <Image className="w-full h-full shadow object-cover object-center rounded-lg" src={category.image} alt={category.name} />

                <div className="flex flex-col justify-between gap-4 md:gap-6">
                  <p className="text-neutral-600 text-xs line-clamp-[7] sm:text-sm lg:line-clamp-none">
                    {category.content}
                  </p>

                  <Link href={category.pageLink}>
                    <button className="flex items-center border border-neutral-400 bg-neutral-200 text-xs gap-2 py-2 px-6 rounded-lg shadow transition duration-200 hover:bg-neutral-300 sm:text-sm">
                      View Category
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Categories;