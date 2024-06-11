import { Images, siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
async function getImages(keyword: string) {
  const url = `${siteConfig.unsplash[0]}&query=${keyword}&per_page=10`;
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
  title: "Portfolio " + siteConfig.name,
};
export default async function Portfolio({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const keywords = ["Marriage", "Mountain Tour " ,"coffee Prdouct ","Pre Weeidng "]
  const keywrodIndex = Number(searchParams.title) || 0
  const keyword = keywords[keywrodIndex] 
  const images = await getImages(keyword);
  const fiveImages  = images.results.slice(0,5)
  const secondfiveImages  = images.results.slice(5,images.length)
  return (
    <main className="overflow-hidden">
    
      <section className="pt-24 md:pt-44    flex flex-col ">
      <header className=" p-5 max-w-7xl m-auto md:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="" >
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-8xl">
          પોર્ટફોલિયો
        </h1>
       <div className="flex gap-3  w-fit m-auto p-5  flex-col md:flex-row">
        <h2 className="text-xl md:text-2xl">Select Project</h2>
       <div className="flex flex-col gap-2">
       {keywords.map((keyw,i) =>  <Link key={keyw} className={i !== keywrodIndex ? "link " :"text-semibold text-base md:text-xl" + ""} href={`/portfolio?title=${i}`}>{keyw}</Link>)}
       </div>
      

       </div>
        </div>

      <article className="prose md:prose-lg ">  <h3>
        આમારી પોર્ટફોલિઓ પૃષ્ઠે આપને આમારા સૌથી શ્રેષ્ઠ કામનું સંગ્રહ જોવાનું
        સ્વાગત છે. અહીં આપે સાક્ષાત્કાર કરવામાં આવેલ છે અમારી વિવિધ સેવાઓ અને
        અદ્વિતીય પરિણામો. આમાં સુંદર દૃશ્યો અને સ્પષ્ટ વિડિયોઝને જોવાનો આનંદ
        મળે છે, જે આપના વ્યક્તિગત અને વ્યાપારિક આવશ્યકતાઓને પુરી પાડે છે.
      </h3>
      <h3>
        આ પોર્ટફોલિઓ માત્ર આખરી કામ ના દર્શાવવા માટે છે. વધુ કામ જોવા માટે,
        કૃપા કરીને આમારું <a className="link" href="https://www.instagram.com/sneh.al/" target="_blank" rel="noopener noreferrer">Instagram </a>  પેજ મુકાશો.
      </h3></article>
      </header>
    </section>
    
      <article className="max-w-7xl py-24 m-auto grid grid-cols-12 gap-10  ">
       <div className="flex-0 flex flex-col gap-10 col-span-8">
       {images && fiveImages.map((image :any) => <ImageDiv key={image.id} image={image} />)}
       </div>
       <div className=" h-full col-span-4 flex flex-col justify-end items-end gap-10  ">

        {images && secondfiveImages.map((image : any) => <ImageDiv key={image.id} image={image} />)}
       </div>
      </article>
    </main>
  );
}

const ImageDiv = ({ image } :{image: Images}) => (
  <div
    key={image.id}
    className="cursor-pointer h-full bg-red-200 "
  >
    <Image
      className=" w-full h-full object-cover  "
      src={image?.urls.full}
      placeholder="blur"
      blurDataURL={image?.blur_hash}
      height={image.height}
      width={image.width}
      alt={image?.description}
    />
  </div>
);
