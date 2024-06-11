import { Images, siteConfig } from "@/config/site";
import Carousel from "./ui/Carousel";
import Image from "next/image";
import Link from "next/link";

async function getImages() {
  const url = `${siteConfig.unsplash[0]}&query=photogrpahy-indian-wedding&orientation=portrait`;

  const res = await fetch(url, {
    next: { revalidate: 3600, tags: ["carousel-images"] },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HeroCarousel = async () => {
  const images = await getImages();
0
  return (
      <div className="  carousel   max-w-5xl space-x-4 rounded-box">
        {images &&
          images?.results?.map((image : Images) => (
            <div
              key={image.id}
              className="carousel-item h-auto  w-64 md:w-full lg:max-w-sm   overflow-hidden "
            >

              <Image
               placeholder="blur"
                className="object-cover p-5 h-full object-top hover:scale-110  m-auto   transform ease-in duration-150 "
                src={image.urls.regular}
                blurDataURL={image.blur_hash}
                width={600}
                height={600}
                alt={image.description}
                />
            
            </div>
          ))}
      </div>
  );
};

export default HeroCarousel;
