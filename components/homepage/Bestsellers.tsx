import { v4 as uuidv4 } from 'uuid';

import Marquee from "../marquee/Marquee";
import roseBurma from '@/public/assets/images/rose-burma.jpg';
import childrenBloodBone from '@/public/assets/images/children-of-blood-and-bone.jpg';
import foolOfDeath from '@/public/assets/images/fool-of-death.jpg';
import purpleHibiscus from '@/public/assets/images/purple-hibiscus.jpg';
import thingsFallApart from '@/public/assets/images/things-fall-apart.jpg';
import thereWasACountry from '@/public/assets/images/there-was-a-country.jpg';
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

const Bestsellers = () => {
  const images = [
    { src: roseBurma, alt: "Rose and the Burma Sky" },
    { src: childrenBloodBone, alt: "Children of Blood and Bone" },
    { src: foolOfDeath, alt: "You Made a Fool of Death with your Beauty" },
    { src: purpleHibiscus, alt: "Purple Hibiscus" },
    { src: thingsFallApart, alt: "Things Fall Apart" },
    { src: thereWasACountry, alt: "There Was a Country" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <section>
      <Marquee content="bestsellers" />

      <div className="max-w-[96rem] mx-auto px-2 divide-y-2 divide-neutral-900">
        {/* Things Fall Apart */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">things fall apart</h3>

          <div className="font-clash grid justify-between gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4 order-last lg:order-first md:gap-8">
              <p className="text-sm sm:text-base md:text-md lg:text-lg">
                Things Fall Apart is the first of three novels in Chinua Achebe’s critically acclaimed African Trilogy. It is a classic narrative about Africa’s cataclysmic encounter with Europe as it establishes a colonial presence on the continent. Told through the fictional experiences of Okonkwo, a wealthy and fearless Igbo warrior of Umuofia in the late 1800s, Things Fall Apart explores one man’s futile resistance to the devaluing of his Igbo traditions by British political andreligious forces and his despair as his community capitulates to the powerful new order.
              </p>

              <Link href="/non-fiction" className="flex">
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12'>
                  View Book <BsChevronRight className='text-sm' />
                </button>
              </Link>
            </div>
            
            <div className="h-36 sm:h-48 shadow-md bg-tfa bg-bottom bg-contain lg:h-full"></div>
          </div>
        </div>

        {/* Americanah */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">americanah</h3>

          <div className="font-clash grid justify-between gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4 order-last md:gap-8">
              <p className="text-sm sm:text-base md:text-md lg:text-lg">
                Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. Quiet, thoughtful Obinze had hoped to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria, and reignite their passion—for each other and for their homeland.
              </p>

              <Link href="/non-fiction" className="flex">
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12'>
                  View Book <BsChevronRight className='text-sm' />
                </button>
              </Link>
            </div>
            
            <div className="h-36 sm:h-48 shadow-md bg-americanah bg-bottom bg-contain lg:h-full"></div>
          </div>
        </div>

        {/* Akata Witch */}
        <div className="space-y-2 py-6 xs:py-8 xs:space-y-4 md:py-10 lg:py-12 md:space-y-6">
          <h3 className="font-ade uppercase text-2xl xs:text-3xl md:text-4xl lg:text-5xl">akata witch</h3>

          <div className="font-clash grid justify-between gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4 order-last lg:order-first md:gap-8">
              <p className="text-sm sm:text-base md:text-md lg:text-lg">
                Twelve-year-old Sunny lives in Nigeria, but she was born American. Her features are African, but she’s albino. She’s a terrific athlete, but can’t go out into the sun to play soccer. There seems to be no place where she fits in. And then she discovers something amazing—she is a &quot;free agent&quot; with latent magical power. Soon she’s part of a quartet of magic students, studying the visible and invisible, learning to change reality. But will it be enough to help them when they are asked to catch a career criminal who knows magic too?
              </p>

              <Link href="/non-fiction" className="flex">
                <button className='flex items-center gap-2 border border-neutral-900 py-2 px-8 transition duration-200 hover:border-primary hover:bg-primary hover:text-neutral-100 xs:py-3 xs:px-12'>
                  View Book <BsChevronRight className='text-sm' />
                </button>
              </Link>
            </div>
            
            <div className="h-36 sm:h-48 shadow-md bg-akata bg-bottom bg-contain lg:h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;