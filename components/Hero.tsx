import HeroCarousel from "./HeroCarousel";





const Hero = () => {
  return (
    <section className=" overflow-hidden    ">
      <article className="md:pt-24 min-h-screen grid place-content-center grid-cols-1   lg:grid-cols-12  max-w-7xl m-auto">
        <header className="m-auto  max-w-md pt-24 tracking-wide p-5 col-span-4 flex flex-col gap-3 text-center md:text-left items-center md:items-baseline">
          <h3 className="text-base md:text-xl text-accent">ફ્રીલાન્સર ફોટોગ્રાફર</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-10  text-pretty">
            અમે મદદ કરીયે છીએ તમારી{" "}
            <span className="text-primary">સુંદર ક્ષણો</span> ને{" "}
            <span className="text-secondary">કેપચર</span> કરવામાં..
          </h1>
    <a className="btn btn-outline btn-primary w-fit ">Book now</a>
    {/* <CarouselButtons/> */}

        </header>
        <div className="col-span-8">
      <HeroCarousel/>
        </div>
      </article>
    </section>
  );
};





export default Hero;
