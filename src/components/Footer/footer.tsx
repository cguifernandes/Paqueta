'use client'
import { Check, EnvelopeSimple, User } from "phosphor-react";
import Heading from "../Heading/heading";
import Text from "../Text/text";
import Button from "../Button/button";
import AmarecinasExpress from "../../assets/cards/americanexpress.png";
import Boleto from "../../assets/cards/boleto.png";
import Elo from "../../assets/cards/elo.png";
import Gaston from "../../assets/cards/gaston.png";
import HiperCard from "../../assets/cards/hipercard.png";
import Itau from "../../assets/cards/itau.png";
import MasterCard from "../../assets/cards/mastercard.png";
import Paqueta from "../../assets/cards/paqueta.png";
import Visa from "../../assets/cards/visa.png";
import Certificado from "../../assets/certificado.png";
import FooterImagem from "../../assets/footer.png";
import Seguranca from "../../assets/seguranca.png";
import Arrow from "../../assets/arrow.png";
import Line from "../../assets/line.png";
import Sociais from "../Sociais/sociais";

const Footer = () => {
    return ( 
        <footer>
            <div className="bg-gradient-to-r from-orange-100 to-orange-300 mt-28 flex py-12 items-center justify-between gap-y-4 gap-x-8 px-[7.5%] flex-col md:px-[10%] xl:flex-row xl:gap-0 2xl:px-[15%]">
                <Heading className={"text-3xl text-white w-full text-center space-y-20 font-montserrat xl:text-left xl:w-[450px] 2xl:text-4xl"}>SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!</Heading>
                <div className="relative w-[160px] hidden 2xl:inline">
                    <img className="absolute left-0" src={Line.src} />
                    <img className="absolute right-0 top-[57px]" src={Arrow.src} />
                </div>
                <form className="w-[80%] xl:w-auto 2xl:w-[610px]">
                    <Text className={"text-xl text-white py-6 text-center xl:text-left"}>Nos informe o seu e-mail e nome para o melhor atendimento!</Text>
                    <div className="flex gap-x-5 w-full flex-col gap-y-4 md:flex-row">
                        <div className="border-b relative border-white/70 flex items-center justify-between w-full md:w-[50%] xl:w-[300px]">
                            <EnvelopeSimple className="absolute" size={32} color="#ffffff" /> 
                            <input className="pl-[45px] w-full bg-transparent py-2 outline-none text-white placeholder:text-white/60 xl:w-[300px]" type="text" placeholder="maria@seuemail.com" />
                        </div>
                        <div className="border-b relative border-white/70 flex items-center justify-between w-full md:w-[50%] xl:w-[300px]">
                            <User className="absolute" size={32} color="#ffffff" /> 
                            <input className="pl-[45px] w-full bg-transparent py-2 outline-none text-white placeholder:text-white/60 xl:w-[300px]" type="text" placeholder="Maria da Silva" />
                        </div>
                    </div>
                    <div className="flex justify-around py-8 flex-wrap gap-y-3 lg:flex-nowrap">
                        <Text className={"text-white text-lg"}>Tenho interesse na categoria:</Text>
                        <div className="flex items-center justify-evenly w-[340px]">
                            <label htmlFor="checkbox-1" className="cursor-pointer relative flex items-center justify-center">
                                <input type="checkbox" id="checkbox-1" className="appearance-none h-6 w-6 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
                                <Check weight="bold" size={22} color="#eb7718" className="absolute left-[1px] opacity-0 check-1 transition duration-75" />
                                <span className="text-white text-lg ml-2">Masculino</span>
                            </label>
                            <label htmlFor="checkbox-2" className="cursor-pointer relative flex items-center justify-center">
                                <input type="checkbox" id="checkbox-2" className="appearance-none h-6 w-6 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
                                <Check weight="bold" size={22} color="#eb7718" className="absolute left-[1px] opacity-0 check-2 transition duration-75" />
                                <span className="text-white text-lg ml-2">Feminina</span>
                            </label>
                        </div>
                    </div>
                    <Button className="bg-[linear-gradient(122.71deg,_#F99500_53.34%,_#FFCD29_133.06%)] block m-[0_auto] xl:m-0" width={220}>QUERO RECEBER</Button>
                </form>
            </div>
            <div className="bg-[rgba(56,_56,_56,_0.1)] flex justify-evenly items-center py-12 px-8 gap-x-8 gap-y-10 font-montserrat flex-wrap xl:px-0">
                <div className="flex flex-col justify-between items-start h-[330px] w-full md:w-auto">
                    <Heading className="text-xl">Institucional</Heading>
                    <Text className={"cursor-pointer duration-200 hover:text-black/60"}>Quem Somos</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Nossas Lojas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Soluções Corporativas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Política de Privacidade</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Contrato de Compra e Venda</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Crédito Pessoal</Text>
                </div>
                <div className="flex flex-col justify-between items-start h-[330px] w-full md:w-auto">
                    <Heading className="text-xl">Ajuda e Suporte</Heading>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Troca e Devolução</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>2ª Via do Boleto</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Detalhamento de Fatura</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Entregas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Meus Pedidos</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Dúvidas Frequentes</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Status do Pedido</Text>
                </div>
                <div className="flex flex-col items-start h-[330px] justify-between w-full md:w-auto">
                    <div className="flex flex-col items-start">
                        <Heading className="text-xl mb-2">Atendimento</Heading>
                        <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Fale Conosco</Text>
                    </div>
                    <div className="flex flex-col items-start">
                        <Heading className="text-xl mb-2">Endereço</Heading>
                        <Text className={"cursor-pointer w-[280px] duration-200 hover:text-black/50"}>Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ: 01.098.983/0175-02</Text>
                    </div>
                    <div className="flex flex-col">
                        <Heading className="text-xl mb-2">Trabalhe Conosco</Heading>
                        <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Venha crescer com a Paquetá!</Text>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-[330px] w-full md:w-auto">
                    <div>
                        <Heading className="text-xl mb-2">Formas de Pagamento</Heading>
                        <div className="grid grid-rows-3 grid-cols-3 items-center justify-items-center gap-5">
                            <img src={MasterCard.src} />
                            <img src={AmarecinasExpress.src} />
                            <img src={Elo.src} />
                            <img src={Paqueta.src} />
                            <img src={Gaston.src} />
                            <img src={Visa.src} />
                            <img src={HiperCard.src} />
                            <img src={Itau.src} />
                            <img src={Boleto.src} />
                        </div>
                    </div>
                    <div>
                        <Heading className="text-xl mb-4">Redes Sociais</Heading>
                        <Sociais />
                    </div>
                </div>
                <div className="flex flex-col justify-between h-[330px] w-full md:w-auto">
                    <div>
                        <Heading className={"text-xl mb-2"}>Prêmios e Certificações</Heading>
                        <img src={Certificado.src} />
                    </div>
                    <div>
                        <Heading className={"text-xl mb-2"}>Prêmios e Certificações</Heading>
                        <img src={Seguranca.src} />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#383838] py-8 flex-col items-center gap-y-5 justify-center gap-x-7 flex md:flex-row">
                <Text className={"text-lg text-white"}>UMA EMPRESA DO GRUPO </Text>
                <img className="w-[265px] h-[59px]" src={FooterImagem.src} />
            </div>
        </footer> 
    );
}
 
export default Footer;