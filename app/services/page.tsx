import { Images, siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";

async function getImages() {
    const url = `${siteConfig.unsplash[0]}&query=hd&per_page=20`;
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: ["carousel-images"] },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    
    return res.json();
  }
export const metadata: Metadata = {
  title: "Services " + siteConfig.name,
};
export default async function Services() {
 const images =await getImages();
  return (
    <main className="overflow-hidden py-24">
        <section>
<article className="grid gri  md:grid-cols-3 lg:grid-cols-4 p-5 gap-6 max-w-7xl w-full m-auto">

        {siteConfig.services.map((service,i) =><div className="card shadow-md glass p-5" key={service}>
            <ImageDiv image={images?.results[i]} />  
            
            {service}</div>)}
</article>
        </section>
   
    </main>
  );
}

const ImageDiv = ({ image }:{image : Images}) => (
  <div
    key={image?.id}
    className="cursor-pointer h-full bg-red-200 "
  >
    <Image
      className=" w-full h-full object-cover  "
      src={image?.urls?.small}
      placeholder="blur"
      blurDataURL={image?.blur_hash}
      height={image?.height}
      width={image?.width}
      alt={image?.description}
    />
  </div>
);
