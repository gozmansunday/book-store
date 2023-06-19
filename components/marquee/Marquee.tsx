import MarqueeContent from "./MarqueeContent";

interface Props {
  content: string;
}

const Marquee = ({content}: Props) => {
  return (
    <div className="relative overflow-hidden">
      <section className="flex font-neue py-3 xs:py-4 md:py-6">
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
        <MarqueeContent content={content} />
      </section>

      <div className="absolute inset-y-0 inset-x-2  max-w-[96rem] mx-auto border-y-4 border-neutral-900" />
    </div>
  );
};

export default Marquee;