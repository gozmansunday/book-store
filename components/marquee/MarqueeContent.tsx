import { FaStarOfLife } from "react-icons/fa";

interface Props {
  content: string;
}

const MarqueeContent = ({content}: Props) => {
  return (
    <div className="flex items-center animate-marquee text-5xl xs:text-6xl md:text-7xl lg:text-8xl">
      &nbsp;
      <h2 className="md:pb-1">
        {content}
      </h2>
      &nbsp;
      <FaStarOfLife className="text-lg xs:text-xl md:text-2xl lg:text-3xl" />
    </div>
  );
};

export default MarqueeContent;