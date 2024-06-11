import { Images, siteConfig } from "@/config/site";
import HeroAbout from "./HeroAbout";
import Image from "next/image";

async function getImages() {
  const url = `${siteConfig.unsplash[0]}&query=photogrpahy-family-dance&per_page=20`;
  const res = await fetch(url, {
    next: { revalidate: 3600, tags: ["carousel-images"] },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const HeroPortfolio = async () => {
  const images = await getImages();
  const imagesFirst5 = images.results.slice(0, 3);
  const imagesSecond5 = images.results.slice(5, 7);
  const imagesThird5 = images.results.slice(11, 13);
  const imagesThird4 = images.results.slice(16, 19);

  return (
    <section className="grid grid-cols-12">
      <article className=" flex flex-col col-span-6 overflow-hidden ">
        <HeroAbout />
        {imagesFirst5.map((image :Images) => (
          <ImageDiv key={image?.id} image={image} />
        ))}
        <VisitPortfolio />

        {imagesSecond5.map((image : Images) => (
          <ImageDiv key={image?.id} image={image} />
        ))}
      </article>
      <article className="grid grid-cols-1  flex-1 overflow-hidden  col-span-6">
        {imagesThird5.map((image: Images) => (
          <ImageDiv key={image?.id} image={image} />
        ))}
        <Services />
        {imagesThird4.map((image : Images) => (
          <ImageDiv key={image?.id} image={image} />
        ))}
        <Contact />
      </article>
    </section>
  );
};

const ImageDiv = ({ image }: { image: Images }) => (
  <div key={image.id} className="h-full cursor-pointer aspect-square">
    <Image
      className="object-cover w-full  h-full hover:scale-95 transition ease-in duration-300 motion-reduce:duration-100 "
      src={image?.urls.full}
      placeholder="blur"
      blurDataURL={image?.blur_hash}
      width={600}
      height={600}
      alt={image?.description}
    />
  </div>
);

// visit portfolio
const VisitPortfolio = () => (
  <section className="md:py-24 prose md:prose-lg  ">
    <article className=" max-w-6xl items-center md:items-baseline text-center md:px-12 md:text-left text-balance flex flex-col gap-3 p-5">
      <p className="">
        અમારી કુશળતા જીવનની નિર્ધારિત ક્ષણોને કેપ્ચર કરવામાં આવેલી છે, જેમાં
        લગ્નના ફોટો શૂટ પર વિશેષ ધ્યાન આપવામાં આવે છે. અમારી કુશળ અને અનુભવી ટીમ
        તમારા ખાસ દિવસના જાદુને સાચવવા માટે સમર્પિત છે. અમારું ઉદ્દેશ માત્ર
        છબીઓમાં લગતાંતર કરવું નથી, પરંતુ તમારી વિશેષ વાર્તાસાથે મેળવવાનો એક
        ચિત્રકલ્પ બનાવવો છે. 
      </p>
      <div className="flex items-center gap-3">
        <button className="btn  btn-outline w-fit btn-primary  btn-sm md:btn-md">
           તાજેતરના કામ
        </button>
      </div>
    </article>
  </section>
);

const Services = () => {
  return (
    <section className=" md:py-10 prose md:prose-lg  ">
      <article className="items-center md:items-baseline   md:px-12 md:text-left text-balance flex flex-col gap-3 p-5">
        <p className="">
          અમે ગર્વથી પ્રદાન કરીએ છીએ વિવાહ, પરિવાર, અને અન્ય સામાજિક ઘટનાઓના ખાસ
          ક્ષણોનો આદર્શ ચિત્રણ કરવાની સેવાઓ પ્રદાન કરવાનારા છીએ. આપના વિશેષ ક્ષણોને આપના સાથે શેર કરીને,
          અમે ખૂબસૂરત અને સંવેદનાએ ભરપૂર તસવીરો બનાવીએ છીએ.
        </p>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline btn-primary w-fit  btn-sm md:btn-md ">
            આમારી  સેવાઓ
          </button>
        </div>
      </article>
    </section>
  );
};

const Contact = () => (
  <div className=" flex items-center justify-center md:justify-start flex-col md:flex-row gap-6  p-5">
    <button className="btn btn-outline btn-neutral  btn-sm md:btn-md ">સંપર્ક કરો</button>
    <button className="link text-neutral">
      વધુ કામ જોવા માટે, કૃપા કરીને Instagram પર વિઝિટ કરો.
    </button>
  </div>
);

export default HeroPortfolio;
