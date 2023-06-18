import MarqueeContent from "./MarqueeContent";

const Marquee = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="flex font-neue py-3 xs:py-4 md:py-6">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </section>

      <div className="absolute inset-y-0 inset-x-2  max-w-[96rem] mx-auto border-y-4 border-neutral-900" />
    </div>
  );
};

export default Marquee;