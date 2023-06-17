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

      <div className="absolute inset-0 container mx-auto border-y-4 border-neutral-900" />
    </div>
  );
};

export default Marquee;