import { ServiceCardProps } from "@/types/props.type";
import Image from "next/image";

const ServicesCard = ({ serviceData }: { serviceData: ServiceCardProps }) => {
  return (
    <div className="shadow-sm hover:shadow-md cursor-pointer p-8 rounded-lg bg-gray-50">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
        <Image
          src={serviceData.icon}
          alt={serviceData.text}
          width={40}
          height={40}
        />
        <p className="text-base font-semibold text-center">
          {serviceData.text}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
