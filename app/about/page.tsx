import AboutHead from "@/components/AboutHead";
import Info from "@/components/Info";
import ServicesList from "@/components/ServicesList";
import Teams from "@/components/Teams";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About " + siteConfig.name ,
}
 
export default function About() {
  return (
    <main className="overflow-hidden">
      <AboutHead/>
      <Info/>
      <Teams/>
      <ServicesList/>
    </main>
  );
}
