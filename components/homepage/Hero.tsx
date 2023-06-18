import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';

import foolOfDeath from '@/public/assets/images/fool-of-death.jpg';
import roseBurma from '@/public/assets/images/rose-burma.jpg';

const Hero = () => {
  return (
    <section className="pt-10">
      <div className="max-w-[96rem] mx-auto px-2 space-y-8">
        <div className="flex justify-center items-center font-ade uppercase text-center max-w-6xl mx-auto text-3xl xs:text-4xl md:text-6xl lg:text-7x">
          The best of Nigerian literature, all in one place.
        </div>

        {/* New Releases */}
        <div className='font-clash space-y-4 md:space-y-6 px-2'>
          <h3 className='text-lg sm:text-xl'>New releases</h3>

          <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
            {/* Book 1 Image and Info */}
            <section className='flex flex-col gap-8 md:flex-row'>
              <Image className='w-full mx-auto md:w-52 shadow-md shadow-neutral-700/40' src={roseBurma} alt="Rose and the Burma Sky" />

              <div className='space-y-3'>
                <section className=' font-semibold'>
                  <h4 className='text-lg sm:text-xl'>Rose and the Burma Sky</h4>
                  <h5 className='text-sm sm:text-base'>Rosanna Amaka</h5>
                </section>
                
                <section className='space-y-6 text-sm sm:text-base'>
                  <p className='line-clamp-4 text-neutral-700 md:line-clamp-[8]'>
                    ONE WAR, ONE SOLDIER, ONE LOVE

                    1939: In a village in south-east Nigeria at the brink of world, young Obi watches from a mango tree as a colonial army jeep whooshes by, filled with soldiers laughing and shouting, their buttons shining in the sun. To Obi, their promise of a smart uniform and regular wages are hard to resist, especially as he has his sweetheart Rose to impress and a family to support.

                    Years later, when Rose falls pregnant to another man, his young heart is shattered. As the Burma Campaign mounts, and Obi is shipped out to fight, he is haunted by the mystery of Rose’s lover. When his identity comes to light, Obi’s devastation leads to a tragic - and wholly unforeseeable - chain of events.
                  </p>
                  <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100'>
                    View Book <BsChevronRight className='text-sm' />
                  </button>
                </section>
              </div>
            </section>

            {/* Book 2 Image and Info */}
            <section className='flex flex-col gap-8 md:flex-row'>
              <Image className='w-full mx-auto md:w-52 shadow-md shadow-neutral-700/50' src={foolOfDeath} alt="You Made a Fool of Death with Your Beauty" />

              <div className='space-y-3'>
                <section className=' font-semibold'>
                  <h4 className='text-lg sm:text-xl'>You Made a Fool of Death with Your Beauty</h4>
                  <h5 className='text-sm sm:text-base'>Akwaeke Emezi</h5>
                </section>
                
                <section className='space-y-6 text-sm sm:text-base'>
                  <p className='line-clamp-4 text-neutral-700 md:line-clamp-[8]'>
                    Feyi Adekola wants to learn how to be alive again.

                    It’s been five years since the accident that killed the love of her life and she’s almost a new person now—an artist with her own studio, and sharing a brownstone apartment with her ride-or-die best friend, Joy, who insists it’s time for Feyi to ease back into the dating scene. Feyi isn’t ready for anything serious, but a steamy encounter at a rooftop party cascades into a whirlwind summer she could have never imagined: a luxury trip to a tropical island, decadent meals in the glamorous home of a celebrity chef, and a major curator who wants to launch her art career.

                    She’s even started dating the perfect guy, but their new relationship might be sabotaged before it has a chance by the dangerous thrill Feyi feels every time she locks eyes with the one person in the house who is most definitely off-limits. This new life she asked for just got a lot more complicated, and Feyi must begin her search for real answers. Who is she ready to become? Can she release her past and honor her grief while still embracing her future? And, of course, there’s the biggest question of all—how far is she willing to go for a second chance at love?
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