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

export type PlansCardProps = {
  id: number;
  popular: boolean;
  name: string;
  details: string;
  price: number;
  features: string[];
};
