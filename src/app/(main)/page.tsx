import Banner from "@/components/Banner/banner";
import Button from "@/components/Button/button";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";
import Logo from "../../assets/logo.png"
import BannerHero from "../../assets/banner-hero.png"
import Adidas from "../../assets/marcas/adidas.png";
import Bebece from "../../assets/marcas/bebece.png";
import Dumond from "../../assets/marcas/dumond.png";
import ViaMarte from "../../assets/marcas/via-marte.png";
import Number from "@/components/Number/number";
import Cards from "@/components/Cards/cards";
import Image from "next/image";
import Calcados from "@/components/Calcados/calcados";


export const metadata = {
  title: "Paquetá | Home",
}

const Main = () => {


  return (  
    <>
      <div className="w-full relative">
        <Image className="w-full object-cover" src={BannerHero} alt="Banner Hero"/>
        <div className="absolute right-[5%] -translate-y-[50%] top-[50%] hidden lg:inline">
          <Heading className={'text-5xl xl:text-7xl'}>Tênis Casual</Heading>
          <Heading className={'text-orange-200 text-5xl xl:text-3xl'}>Masculino</Heading>
          <div className="py-6">
            <Text className={"text-black/50"}>A partir de</Text>
            <Heading className={"text-2xl xl:text-4xl"}>R$ 79,99</Heading>
          </div>  
          <Button width={220}>APROVEITE</Button>
        </div>
      </div>
      <Banner />
      <Calcados />
      <div className="w-[75%] h-[2px] bg-grey-100/20 block m-[0_auto]" />
      <div className="py-[80px]">
        <div className="flex justify-between flex-col items-center pb-[50px] px-[12.5%] md:flex-row gap-y-4 md:gap-0">
          <div>
            <Image width={277} height={65} src={Logo.src} alt="Logo" /> 
            <Heading align="right" className={"text-orange-100 text-5xl"}>OUTLET</Heading>
          </div>
          <Text className={"text-xl text-center sm:w-[580px] md:pl-8 md:text-right"}>Você também pode escolher o seu novo sapato favorito de acordo com a sua numeração.</Text>
        </div>
        <div className="px-[12.5%] flex flex-wrap justify-center gap-3 lg:justify-evenly">
          <Number number={33} />
          <Number number={34} />
          <Number number={35} />
          <Number number={36} />
          <Number number={37} />
          <Number number={38} />
          <Number number={39} />
          <Number number={40} />
          <Number number={41} />
          <Number number={42} />
          <Number number={43} />
          <Number number={44} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-[12.5%] py-10">
          <Heading className={"text-3xl font-montserrat"}>DESTAQUES</Heading>
          <Text className={"text-lg cursor-pointer font-montserrat hover:text-black/50"}>CONFERIR TUDO</Text>
        </div>
        <div className="px-[60px] md:px-[150px] lg:px-[120px]">
          <Cards />
        </div>
        <Heading className={"text-3xl px-[12.5%] py-10 font-montserrat"}>AS MELHORES MARCAS ESTÃO AQUI!</Heading>
        <div className="flex flex-wrap gap-x-4 gap-y-8 justify-between items-center px-[12.5%] py-16 xl:flex-nowrap">
          <Image height={87} width={128} src={Adidas.src} alt="Adidas logo" />
          <Image height={58} width={213} src={Bebece.src} alt="Bebece logo" />
          <Image height={47} width={232} src={Dumond.src} alt="Dumond logo" />
          <Image height={36} width={276} src={ViaMarte.src} alt="Viamarte logo" />
        </div>
      </div>
    </>
  );
}
 
export default Main;
