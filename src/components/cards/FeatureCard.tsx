import { FeatureCardProps } from "@/types/props.type";
import Image from "next/image";

const FeatureCard = ({ featureData }: { featureData: FeatureCardProps }) => {
  return (
    <div
      className={`feature-card ${featureData.bgColor} rounded-2xl my-7 p-8 flex flex-col md:flex-row gap-12 shadow text-center md:text-left`}
    >
      <div className="md:w-1/2 text-gray-50">
        <p className="text-sm font-semibold">{featureData.title}</p>
        <h1 className="mt-14 mb-7 font-semibold text-3xl">
          {featureData.title}
        </h1>
        <p className="text-xl">{featureData.content}</p>
      </div>
      <div className="md:w-1/2">
        <Image
          src={featureData.image}
          alt={featureData.title}
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
