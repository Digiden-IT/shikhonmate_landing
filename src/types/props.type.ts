import { StaticImageData } from "next/image";

export type ServiceCardProps = {
  icon: string;
  text: string;
};

export type FeatureCardProps = {
  title: string;
  content: string;
  image: StaticImageData | string;
  bgColor: string;
};
