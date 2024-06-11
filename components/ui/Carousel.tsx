"use client";
import  Carousel  from 'better-react-carousel';


const TextCarousel = ({ items }: { items: Array<any> }) => {

  return (
    <div className='p-5 md:p-10 bg-primary text-xl md:text-2xl text-nowrap'>
    <Carousel cols={4} rows={1}  loop={true} responsiveLayout={[
  {
    breakpoint: 400,
    cols: 1,
    rows: 1,
    gap: 2,
    loop: true,
    autoplay: 2000
  },
  {
    breakpoint: 800,
    cols: 2,
    rows: 1,
    gap: 2,
    loop: true,
    autoplay: 2000
  },
  {
    breakpoint: 1200,
    cols: 4,
    rows: 1,
    gap: 4,
    loop: true,
    autoplay: 2000
  }
]}  autoplay={2000} hideArrow={true}>
 
 {items.map(item =><Carousel.Item  key={item}>
   <div className="divider divider-horizontal"/>

   <button className=" text-nowrap text-base-100 ">{item}</button>
   <div className="divider divider-horizontal"/>
 </Carousel.Item>)}
 </Carousel>
  </div>
  );
};

export default TextCarousel;
