'use client'
import { Check, EnvelopeSimple, User } from "phosphor-react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
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
import Seguranca from "../../assets/seguranca.png";

const Footer = () => {
    return ( 
        <>
            <div className="h-[370px] bg-gradient-to-r from-orange-100 to-orange-300 mt-28 flex items-center justify-between px-[15%]">
                <div className="flex items-center">
                    <Heading className={"text-4xl text-white w-[460px] space-y-20 font-montserrat"}>SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!</Heading>
                    <div className="relative top-10 left-10 w-[160px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="107" height="89" fill="none" viewBox="0 0 107 89" >
                            <path stroke="#fff" strokeDasharray="20 20" strokeWidth="4" d="M106.163 86.242l-42.718-5.325c-23.728-2.958-43.134-20.321-48.702-43.575L8.575 11.586A13.324 13.324 0 001 2.5v0"></path>
                        </svg>
                        <svg className="absolute right-0 top-[57px]" xmlns="http://www.w3.org/2000/svg" width="68" height="66" fill="none" viewBox="0 0 68 66">
                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M65.44 44.951L29.62 31.998M65.44 44.949l-51.454 5.253 15.746-18.166-.485-24.035L65.44 44.95z" ></path>
                        </svg>
                    </div>
                </div>
                <form>
                    <Text className={"text-xl text-white py-6"}>Nos informe o seu e-mail e nome para o melhor atendimento!</Text>
                    <div className="flex gap-x-5 w-full">
                        <div className="border-b relative border-white/70 flex items-center justify-between w-[300px]">
                            <EnvelopeSimple className="absolute" size={32} color="#ffffff" /> 
                            <input className="pl-[45px] w-[300px] bg-transparent py-2 outline-none text-white placeholder:text-white/60" type="text" placeholder="maria@seuemail.com" />
                        </div>
                        <div className="border-b relative border-white/70 flex items-center justify-between w-[300px]">
                            <User className="absolute" size={32} color="#ffffff" /> 
                            <input className="pl-[45px] w-[300px] bg-transparent py-2 outline-none text-white placeholder:text-white/60" type="text" placeholder="Maria da Silva" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-8">
                        <Text className={"text-white text-lg"}>Tenho interesse na categoria:</Text>
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
                    <Button className="bg-[linear-gradient(122.71deg,_#F99500_53.34%,_#FFCD29_133.06%)]" width={220}>QUERO RECEBER</Button>
                </form>
            </div>
            <footer className="bg-[rgba(56,_56,_56,_0.1)] flex justify-evenly items-center h-[430px] font-montserrat">
                <div className="flex flex-col justify-between items-start h-[330px]">
                    <Heading className="text-xl">Institucional</Heading>
                    <Text className={"cursor-pointer duration-200 hover:text-black/60"}>Quem Somos</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Nossas Lojas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Soluções Corporativas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Política de Privacidade</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Contrato de Compra e Venda</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Crédito Pessoal</Text>
                </div>
                <div className="flex flex-col justify-between items-start h-[330px]">
                    <Heading className="text-xl">Ajuda e Suporte</Heading>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Troca e Devolução</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>2ª Via do Boleto</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Detalhamento de Fatura</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Entregas</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Meus Pedidos</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Dúvidas Frequentes</Text>
                    <Text className={"cursor-pointer duration-200 hover:text-black/50"}>Status do Pedido</Text>
                </div>
                <div className="flex flex-col items-start h-[330px] justify-between">
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
                <div className="flex flex-col justify-between h-[330px]">
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
                        <div className="flex items-center justify-around">
                            <div className="p-2 mx-1 rounded-full duration-200 hover:bg-[rgba(51,_51,_51,_0.5)]">
                                <FaInstagram className="cursor-pointer" size={32} />
                            </div>
                            <div className="p-2 mx-1 rounded-full duration-200 hover:bg-[rgba(51,_51,_51,_0.5)]">
                                <FaFacebook className="cursor-pointer" size={32} />
                            </div>
                            <div className="p-2 mx-1 rounded-full duration-200 hover:bg-[rgba(51,_51,_51,_0.5)]">
                                <FaTwitter className="cursor-pointer" size={32} />
                            </div>
                            <div className="p-2 mx-1 rounded-full duration-200 hover:bg-[rgba(51,_51,_51,_0.5)]">
                                <FaYoutube className="cursor-pointer" size={32} />
                            </div>
                            <div className="p-2 mx-1 rounded-full duration-200 hover:bg-[rgba(51,_51,_51,_0.5)]">
                                <FaPinterest className="cursor-pointer" size={32} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-[330px]">
                    <div>
                        <Heading className={"text-xl mb-2"}>Prêmios e Certificações</Heading>
                        <img src={Certificado.src} />
                    </div>
                    <div>
                        <Heading className={"text-xl mb-2"}>Prêmios e Certificações</Heading>
                        <img src={Seguranca.src} />
                    </div>
                </div>
            </footer>
            <div>

            </div>
        </> 
    );
}
 
export default Footer;