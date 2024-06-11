import TextCarousel from "./ui/Carousel";
import PageHead from "./ui/PageHead";

const AboutHead = () => {
  return (
    <>
      <PageHead title="અમારા વિશે">
        <h3>
          અમે એક સમગ્ર ટીમ છીએ, જે સૌથી ઉત્કૃષ્ટ ફોટોગ્રાફી અને વીડિયોગ્રાફી
          સેવાઓ પ્રદાન કરે છે. અમારો મિશન છે આપના વિશેષ દિવસોને અમૂલ્ય અનુભવમાં
          પરિણત કરવું અને આપના સ્મરણયાત્રાને આકર્ષક અને અવિસ્મરણીય બનાવવું. અમે
          વિશેષ કામ માટે ઉન્નત ક્ષમતા અને સજ્જતા સાથે પ્રસિદ્ધ છીએ અને આપની
          વિશેષતાઓને અનુકરણ કરવાનું અમારું આકલન છે. અમારા સંપર્ક કરો અને આપના
          પ્રોજેક્ટને આપવામાં મદદ કરવા માટે આમાં અનુમતિ આપો.
        </h3>
      </PageHead>

      <TextCarousel items={ulList} />
    </>
  );
};

const ulList = [
  "Since 2015",
  "500+ Happy Client",
  "Based in Vyara",
  "Instagram",
];

export default AboutHead;
