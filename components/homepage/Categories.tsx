import Image from "next/image";

import Marquee from "../marquee/Marquee";
import fiction from '@/public/assets/images/fiction.jpg';
import nonFiction from '@/public/assets/images/non-fiction.jpg';
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const Categories = () => {
  return (
    <section>
      <Marquee content="categories" />

      {/* Categories Section */}
      <div className="max-w-[96rem] mx-auto px-2 divide-y-2 divide-neutral-900">
        {/* Fiction */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">Fiction</h3>

          <section className="grid gap-4 font-clash md:gap-6 lg:grid-cols-2 lg:gap-12">
            <Image className="w-full shadow-md" src={fiction} alt="Fiction Overview" />

            <div className="flex flex-col justify-between">
              <p className="text-sm sm:text-base md:text-md lg:text-lg">
                Discover the vibrant world of Nigerian fiction on our website. Immerse yourself in captivating narratives that transport you to different times, places, and perspectives. From acclaimed literary masterpieces to contemporary page-turners, our collection showcases the rich tapestry of storytelling from Nigeria’s finest authors. Explore a range of genres, including historical fiction, romance, crime, fantasy, and more. Whether you’re a seasoned reader or new to Nigerian literature, our fiction category offers a treasure trove of engaging narratives that will ignite your imagination and leave you longing for more.
              </p>

              <Link href="/fiction" className="flex">
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 mt-3 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12 xs:mt-6'>
                  View Category <BsChevronRight className='text-sm' />
                </button>
              </Link>
            </div>
          </section>
        </div>

        {/* Non-Fiction */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">Non-Fiction</h3>

          <section className="grid gap-4 font-clash md:gap-6 lg:grid-cols-2 lg:gap-12">
            <Image className="w-full shadow-md" src={nonFiction} alt="Non-Fiction Overview" />

            <div className="flex flex-col justify-between">
              <p className="text-sm sm:text-base md:text-md lg:text-lg"> 
                Explore the compelling realm of Nigerian non-fiction on our platform. Delve into thought-provoking works that offer insights into Nigeria’s history, culture, society, and beyond. From memoirs and biographies to scholarly research and investigative journalism, our non-fiction category provides a diverse array of books that educate, inform, and inspire. Gain a deeper understanding of Nigeria’s past, present, and future through the lenses of renowned authors and experts. Whether you’re seeking personal growth, academic enrichment, or a glimpse into untold stories, our non-fiction collection offers a gateway to knowledge and enlightenment.
              </p>

              <Link href="/non-fiction" className="flex">
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 mt-3 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12 xs:mt-6'>
                  View Category <BsChevronRight className='text-sm' />
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Categories;