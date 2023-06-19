import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';

import { heroInfo } from '@/public/assets/data/data';

const Hero = () => {
  return (
    <section className="py-10">
      <div className="max-w-[96rem] mx-auto px-2 space-y-8">
        <div className="flex justify-center items-center font-ade uppercase text-center max-w-6xl mx-auto text-3xl xs:text-4xl md:text-6xl lg:text-7x">
          The best of Nigerian literature, all in one place.
        </div>

        {/* New Releases */}
        <div className='font-clash space-y-4 md:space-y-6 px-2'>
          <h3 className='text-lg sm:text-xl'>New releases</h3>

          <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>

            {heroInfo.map((heroData) => (
              <section key={heroData.title} className='flex flex-col gap-8 md:flex-row'>
                <Image className='w-full mx-auto md:w-52 shadow-md' src={heroData.image} alt={heroData.title} />

                <div className='space-y-3'>
                  <section className=' font-semibold'>
                    <h4 className='text-lg sm:text-xl'>{heroData.title}</h4>
                    <h5 className='text-sm sm:text-base'>{heroData.author}</h5>
                  </section>
                  
                  <section className='space-y-6 text-sm sm:text-base'>
                    <p className='line-clamp-4 text-neutral-700 md:line-clamp-[8]'>
                      {heroData.content}
                    </p>
                    <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100'>
                      View Book <BsChevronRight className='text-sm' />
                    </button>
                  </section>
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