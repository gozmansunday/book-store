import { authorsData, categoriesData } from "@/public/data/data";
import Image from "next/image";
import Link from "next/link";

const Authors = () => {
  return (
    <section className="py-0">
      <div className="max-w-[84rem] space-y-8 mx-auto px-2 xs:px-3 md:px-6 lg:px-3">
        <h2 className="font-ade uppercase text-xl md:text-3xl">
          notable authors
        </h2>

        <div className="bg-neutral-200/50 border border-neutral-300 divide-y-2 divide-neutral-300 backdrop-blur px-8 rounded-2xl shadow md:px-12">

          {authorsData.map((author) => (
            <div key={author.name} className="py-8 md:py-12">
              <section className="grid gap-4 md:grid-cols-[3fr_5fr] md:gap-8 lg:gap-12 lg:grid-cols-[3fr_8fr]">
                <Image className="w-full h-full shadow object-cover object-center rounded-md" src={author.image} alt={author.name} />

                <div className="flex flex-col justify-between gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-3">
                    <h4 className="font-clash line-clamp-1 font-semibold text-lg sm:text-xl md:text-2xl">
                      {author.name}
                    </h4>
                    <p className="text-neutral-600 text-xs line-clamp-[7] sm:text-sm lg:line-clamp-none">
                      {author.content}
                    </p>
                  </div>

                  <div>
                    <Link href={author.pageLink}>
                      <button className="border border-neutral-400 bg-neutral-200 text-xs gap-2 py-2 px-6 rounded-lg shadow transition duration-200 hover:bg-neutral-300 sm:text-sm">
                        View Books
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Authors;