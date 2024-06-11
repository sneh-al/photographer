import TextCarousel from "./ui/Carousel";
import { siteConfig } from '@/config/site';

  

const ServicesList = () => {
  return <TextCarousel items={siteConfig.services} />;
}

export default ServicesList