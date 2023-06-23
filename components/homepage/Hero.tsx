import Image from 'next/image';

import { heroInfo } from '@/public/data/data';

const Hero = () => {
  return (
    <section className="py-6">
      <div className="max-w-[84rem] space-y-8 mx-auto px-2 xs:px-3 md:px-6 lg:px-3">
        <h1 className="flex justify-center items-center font-ade uppercase text-center max-w-3xl mx-auto text-2xl md:text-4xl">
          The best of Nigerian literature, all in one place.
        </h1>

        {/* New Releases */}
        <div className="bg-neutral-200/50 border border-neutral-300 backdrop-blur pt-6 pb-8 px-8 rounded-2xl shadow md:pt-8 md:pb-12 md:px-12 space-y-6">
          <h3 className="text-base text-neutral-600 md:text-lg">New Releases</h3>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {heroInfo.map((heroData) => (
              <section key={heroData.title} className="flex flex-col gap-3 md:flex-row md:gap-6">
                <Image className="justify-self-start w-full object-contain rounded-lg md:h-64 md:w-auto" src={heroData.image} alt={heroData.title} />

                <div className="flex flex-col justify-between gap-4 md:gap-0">
                  <section className="font-semibold font-clash space-y-2 md:space-y-3">
                    <div>
                      <h4 className="line-clamp-1 text-base sm:text-lg">{heroData.title}</h4>
                      <h5 className="text-xs sm:text-sm">{heroData.author}</h5>
                    </div>
                    <p className="font-hubot font-normal text-neutral-600 line-clamp-4 text-xs sm:text-sm md:line-clamp-6">
                      {heroData.content}
                    </p>
                  </section>

                  <div>
                    <button className="flex items-center border border-neutral-400 bg-neutral-200 text-xs gap-2 py-2 px-6 rounded-lg shadow transition duration-200 hover:bg-neutral-300 sm:text-sm">
                      View Book
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;