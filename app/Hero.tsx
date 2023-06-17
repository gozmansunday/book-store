import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';

import arrowOfGod from '@/public/assets/images/arrow-of-god.jpg';
import americanah from '@/public/assets/images/americanah.jpg';

const Hero = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-1 space-y-8">
        <div className="flex justify-center items-center font-ade uppercase text-center max-w-6xl mx-auto text-3xl xs:text-4xl md:text-6xl lg:text-7x">
          Discover The World&apos;s Finest Fiction Books
        </div>

        {/* New Releases */}
        <div className='font-clash space-y-4 md:space-y-6 px-2'>
          <h3 className='text-lg sm:text-xl'>New releases</h3>

          <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
            {/* Book 1 Image and Info */}
            <section className='flex flex-col gap-8 md:flex-row'>
              <Image className='w-full mx-auto md:w-52 shadow-lg shadow-neutral-700/50' src={arrowOfGod} alt="arrow-of-god" />

              <div className='space-y-3'>
                <section className=' font-semibold'>
                  <h4 className='text-lg sm:text-xl'>Arrow of God</h4>
                  <h5 className='text-sm sm:text-base'>Chinua Achebe</h5>
                </section>
                
                <section className='space-y-6 text-sm sm:text-base'>
                  <p className='line-clamp-4 text-neutral-700 md:line-clamp-6'>
                    When Things Fall Apart ends, colonial rule has been introduced to Umuofia, and the character of the nation, its values, freedoms, religious and socio-political foundations have substantially and irrevocably been altered. Arrow of God, the second novel in Chinua Achebe’s The African Trilogy, moves the historical narrative forward. This time, the action revolves around Ezeulu, the headstrong chief priest of the god Ulu, which is worshipped by the six villages of Umuaro. The novel is a meditation on the nature, uses, and responsibility of power and leadership. Ezeulu finds that his authority is increasingly under threat from rivals within his nation and functionaries of the newly established British colonial government. Yet he sees himself as untouchable. He is forced, with tragic consequences, to reconcile conflicting impulses in his own nature—a need to serve the protecting deity of his Umuaro people; a desire to retain control over their religious observances; and a need to gain increased personal power by pushing his authority to the limits. He ultimately fails as he leads his people to their own destruction, and consequently, his personal tragedy arises. Arrow of God is an unforgettable portrayal of the loss of faith, and the downfall of a man in a society forever altered by colonialism.
                  </p>
                  <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100'>
                    View Book <BsChevronRight className='text-sm' />
                  </button>
                </section>
              </div>
            </section>

            {/* Book 2 Image and Info */}
            <section className='flex flex-col gap-8 md:flex-row'>
              <Image className='w-full mx-auto md:w-52 shadow-lg shadow-neutral-700/50' src={americanah} alt="americanah" />

              <div className='space-y-3'>
                <section className=' font-semibold'>
                  <h4 className='text-lg sm:text-xl'>Americanah</h4>
                  <h5 className='text-sm sm:text-base'>Chimamanda Ngozi Adichie</h5>
                </section>
                
                <section className='space-y-6 text-sm sm:text-base'>
                  <p className='line-clamp-4 text-neutral-700 md:line-clamp-6'>
                    Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be Black for the first time. Quiet, thoughtful Obinze had hoped to join her, but with post–9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London.
                  </p>
                  <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100'>
                    View Book <BsChevronRight className='text-sm' />
                  </button>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;