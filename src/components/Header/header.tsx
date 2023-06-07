'use client'
import { Bag, Headphones, HeartStraight, MapPin, User } from "phosphor-react";
import Text from "../Text/text";
import Logo from "../../assets/logo.png"
import clsx from "clsx";
import Link from "next/link";

const Header = () => {
    return (  
        <>
            <div className="bg-gradient-to-r from-orange-100 to-orange-300 flex justify-around items-center py-6 flex-col gap-y-4 sm:flex-row">
                <Text className={"text-white text-lg"}>Loja de Calçados e Moda On-line</Text>
                <div className="flex flex-wrap justify-center gap-y-4">
                    <div className="flex items-center justify-between px-4 cursor-pointer">
                        <Headphones className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white sm:hidden lg:inline"}>Fale conosco</Text>
                    </div>
                    <div className="flex items-center justify-between px-4 cursor-pointer">
                        <MapPin className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white sm:hidden lg:inline"}>Encontrar uma loja física</Text>
                    </div>
                </div>
            </div>
            <header className="flex items-center justify-around flex-col py-12 lg:flex-row">
                <Link href={"/"}>
                    <img src={Logo.src} alt="Logo" />
                </Link>
                <div className="flex w-full mt-4 flex-col items-center px-4 justify-evenly sm:flex-row lg:mt-0 lg:w-auto lg:justify-normal">
                    <div className="flex items-center my-4 justify-center lg:mx-6 cursor-pointer">
                        <HeartStraight className="mx-2" size={32} color="#000" />
                        <Text>Lista de desejos</Text>
                    </div>
                    <div className="flex items-center my-4 justify-center lg:mx-6 cursor-pointer">
                        <Bag className="mx-2 fill-orange-100" size={32} color="#000" />
                        <Text>Sacola</Text>
                    </div>
                    <div className={clsx(
                        "group ease duration-200 w-auto flex my-4 items-center justify-center lg:mx-6 py-2 px-4 cursor-pointer rounded-md",  
                        "hover:bg-orange-100 text-white"
                    )}>
                        <User className="mr-2 text-black ease duration-200  group-hover:text-white" size={32} />
                        <Text className={"ease duration-200 group-hover:text-white"}>Entrar</Text>
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-2 text-center gap-y-8 py-4 w-full border-b-2 sm:flex sm:justify-evenly lg:justify-between lg:px-[12.5%]">
                <Text className={'cursor-pointer hover:text-black/60'}>Novidades</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Feminino</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Masculino</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Paquetá Esportes</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Outlet</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Cashback</Text>
            </div>
        </>
    );
}
 
export default Header;