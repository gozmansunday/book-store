import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';

import arrowOfGod from '@/assets/images/arrow-of-god.jpg';

const Hero = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-1 grid gap-8 lg:grid-cols-[5fr_6fr]">
        <div className="flex justify-center items-center font-ade uppercase text-center max-w-2xl mx-auto text-3xl xs:text-4xl md:text-6xl lg:text-7x lg:text-left">
          Discover The World&apos;s Finest Fiction Books
        </div>

        {/* New Releases */}
        <div className='font-clash space-y-3 md:space-y-6 px-2'>
          <h3 className='text-xl'>New releases</h3>

          {/* Book Image and Info */}
          <section className='flex flex-col gap-6 lg:gap-12 md:flex-row'>
            <Image className='w-full mx-auto md:w-64 shadow-lg shadow-neutral-700/50' src={arrowOfGod} alt="arrow-of-god" />

            <div className='space-y-3'>
              <section className=' font-semibold'>
                <h4 className='text-xl'>Arrow of God</h4>
                <h4>Chinua Achebe</h4>
              </section>
              
              <section className='space-y-8'>
                <p className='line-clamp-[10] text-neutral-700'>
                  When Things Fall Apart ends, colonial rule has been introduced to Umuofia, and the character of the nation, its values, freedoms, religious and socio-political foundations have substantially and irrevocably been altered. Arrow of God, the second novel in Chinua Achebe’s The African Trilogy, moves the historical narrative forward. This time, the action revolves around Ezeulu, the headstrong chief priest of the god Ulu, which is worshipped by the six villages of Umuaro. The novel is a meditation on the nature, uses, and responsibility of power and leadership. Ezeulu finds that his authority is increasingly under threat from rivals within his nation and functionaries of the newly established British colonial government. Yet he sees himself as untouchable. He is forced, with tragic consequences, to reconcile conflicting impulses in his own nature—a need to serve the protecting deity of his Umuaro people; a desire to retain control over their religious observances; and a need to gain increased personal power by pushing his authority to the limits. He ultimately fails as he leads his people to their own destruction, and consequently, his personal tragedy arises. Arrow of God is an unforgettable portrayal of the loss of faith, and the downfall of a man in a society forever altered by colonialism.
                </p>
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-main-dark hover:bg-main-dark hover:text-neutral-100'>
                  View Book <BsChevronRight className='text-sm' />
                </button>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;