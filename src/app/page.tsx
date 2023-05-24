import Banner from "@/components/Banner/banner";
import Button from "@/components/Button/button";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";
import Image from "next/image";
import Logo from "../assets/logo.png"
import Number from "@/components/Number/number";
import Card from "@/components/Cards/cards";

export const metadata = {
  title: "Paquetá | Home",
}

const Main = () => {
  return (  
    <main>
      <div className="bg-banner-hero h-[622px] w-full object-cover relative">
        <div className="absolute right-40 -translate-y-[50%] top-[50%]">
          <Heading className={'text-7xl'}>Tênis Casual</Heading>
          <Heading className={'text-orange-200 text-5xl'}>Masculino</Heading>
          <div className="py-6">
            <Text className={"text-black/50"}>A partir de</Text>
            <Heading className={"text-4xl"}>R$ 79,99</Heading>
          </div>
          <Button width={220}>APROVEITE</Button>
        </div>
      </div>
      <Banner />
      <div className="flex flex-col py-[80px] gap-y-[80px]">
        <div className="flex justify-evenly items-center">
          <div className="bg-calcados-femininos h-[620px] w-[668px] relative rounded-[8px]">
            <Text className={"absolute bottom-12 left-12 text-5xl text-white leading-tight"}>CALÇADOS<br/> FEMININOS</Text>
          </div>
          <div className="w-[630px]">
            <Text align="right" className={"text-xl"}>Escolher o seu sapato favorito entre nossa <span className="text-black font-medium">variedade de modelos e cores</span> não será uma tarefa fácil, mas o que uma mulher não consegue fazer?</Text>
            <Button className="mt-8 float-right" width={285}>CONFERIR</Button>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="w-[630px]">
            <Text align="left" className={"text-xl"}>Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até mesmo para praticar esportes!</Text>
            <Button className="mt-8 float-left" width={285}>CONFERIR</Button>
          </div>
          <div className="bg-calcados-masculinos h-[620px] w-[668px] relative rounded-[8px]">
            <Text align="right" className={"absolute bottom-12 right-12 text-5xl text-white leading-tight"}>CALÇADOS<br/> MASCULINOS</Text>
          </div>
        </div>
      </div>
      <div className="w-[75%] h-[2px] bg-grey-100/20 block m-[0_auto]" />
      <div className="py-[80px]">
        <div className="flex justify-between items-center pb-[50px] px-[12.5%]">
          <div>
            <img src={Logo.src} alt="Logo" /> 
            <Heading align="right" className={"text-orange-100 text-5xl"}>OUTLET</Heading>
          </div>
          <Text className={"w-[580px] text-xl"} align="right">Você também pode escolher o seu novo sapato favorito de acordo com a sua numeração.</Text>
        </div>
        <div className="flex items-center justify-between px-[12.5%]">
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
          <Heading className={"text-4xl"}>DESTAQUES</Heading>
          <Text className={"text-xl cursor-pointer hover:text-black/60"}>CONFERIR TUDO</Text>
        </div>
        <div className="px-[12.5%]">
          <Card />
        </div>
      </div>
    </main>
  );
}
 
export default Main;
