import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

import { bestsellersData } from '@/public/assets/data/data';
import Marquee from "../marquee/Marquee";

const Bestsellers = () => {
  return (
    <section>
      <Marquee content="bestsellers" />

      <div className="max-w-[96rem] mx-auto px-2 divide-y-2 divide-neutral-900">

        {bestsellersData.map((bestseller) => (
          <div key={bestseller.name} className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
            <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">{bestseller.name}</h3>

            <section className="font-clash grid justify-between gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className={`h-36 sm:h-48 shadow-md bg-[url(/assets/images/${bestseller.image})] bg-bottom bg-contain md:h-full`}></div>

              <div className="flex flex-col gap-4 md:gap-8">
                <p className="text-sm sm:text-base md:text-md lg:text-lg">
                  {bestseller.content}
                </p>
                <Link href="/bestsellers" className="flex">
                  <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12'>
                    View Book <BsChevronRight className='text-sm' />
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

export default Bestsellers;

// -------------------------------------------------
// IGNORE
{/* bg-[url(/assets/images/things-fall-apart.jpg)] */}
{/* bg-[url(/assets/images/americanah.jpg)] */}
{/* bg-[url(/assets/images/akata-witch.jpg)] */}