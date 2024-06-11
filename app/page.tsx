import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout";
import HeroPortfolio from "@/components/HeroPortfolio";
import ServicesList from "@/components/ServicesList";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <ServicesList/>
   
      <HeroPortfolio/>
    </main>
  );
}
