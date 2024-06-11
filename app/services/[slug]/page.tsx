import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Services  " + siteConfig.name,
};
export default async function Services({params}:{ params: { slug: string } }) {

  return (
    <main className="overflow-hidden py-24">
       
   {params.slug}
    </main>
  );
}

