import Banner from "@/components/modules/home/Banner";
import Contact from "@/components/modules/home/Contact";
import Features from "@/components/modules/home/Features";
import Plans from "@/components/modules/home/Plans";
import Services from "@/components/modules/home/Services";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <Features />
      <Plans />
      <Services />
      <Contact />
    </div>
  );
}
