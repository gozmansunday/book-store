import Image from "next/image";

import Marquee from "../marquee/Marquee";
import fiction from '@/public/assets/images/fiction.jpg';
import nonFiction from '@/public/assets/images/non-fiction.jpg';

const Categories = () => {
  return (
    <section>
      <Marquee />

      {/* Categories Section */}
      <div className="max-w-[96rem] mx-auto px-2 divide-y-2 divide-neutral-900">
        {/* Fiction */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">Fiction</h3>

          <section className="grid gap-4 font-clash md:gap-6 lg:grid-cols-[4fr_5fr] lg:gap-12">
            <Image className="w-full shadow-md shadow-neutral-700/40" src={fiction} alt="Fiction Overview" />

            <p className="text-sm sm:text-base">
              Immerse yourself in the captivating world of Nigerian fiction with our wide collection of imaginative and spellbinding stories. Explore the vivid imaginations of talented Nigerian authors as they transport you to enchanting landscapes, introduce you to intriguing characters, and weave compelling narratives that will keep you hooked from the first page to the last. From contemporary tales of love, adventure, and suspense to historical sagas that delve into Nigeria’s rich cultural heritage, our fiction category offers a diverse range of literary gems. Get ready to embark on unforgettable literary journeys and discover the magic that Nigerian fiction has to offer.
            </p>
          </section>
        </div>

        {/* Non-Fiction */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">Non-Fiction</h3>

          <section className="grid gap-4 font-clash md:gap-6 lg:grid-cols-[4fr_5fr] lg:gap-12">
            <Image className="w-full shadow-md shadow-neutral-700/40" src={nonFiction} alt="Non-Fiction Overview" />

            <p className="text-sm sm:text-base">
              Uncover the remarkable true stories, insightful narratives, and thought-provoking accounts of Nigerian history, culture, politics, and personal experiences with our captivating non-fiction books. Our non-fiction category celebrates the power of knowledge and offers a treasure trove of educational and enlightening reads. Dive into books that explore the rich tapestry of Nigeria’s diverse cultures, examine significant historical events, shed light on social and political issues, provide valuable insights into personal development and self-help, and delve into scientific, technological, or business topics. Discover the wealth of knowledge waiting to be explored within the pages of our thought-provoking non-fiction books.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Categories;