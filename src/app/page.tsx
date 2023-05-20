import Banner from "@/components/Banner/banner";
import Button from "@/components/Button/button";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";

export const metadata = {
  title: "Paquetá | Home",
}

const Main = () => {
  return (  
    <main>
      <div className="bg-banner-hero h-[622px] bg-cover relative">
        <div className="absolute right-40 -translate-y-[50%] top-[50%]">
          <Heading className={'text-grey-100 text-7xl'}>Tênis Casual</Heading>
          <Heading className={'text-orange-200 text-5xl'}>Masculino</Heading>
          <div className="py-6">
            <Text className={"text-black/50"}>A partir de</Text>
            <Heading className={"text-grey-100 text-4xl"}>R$ 79,99</Heading>
          </div>
          <Button width={220}>APROVEITE</Button>
        </div>
      </div>
      <Banner />
    </main>
  );
}
 
export default Main;
